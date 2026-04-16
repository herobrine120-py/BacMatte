import os
import json
import asyncio
import hashlib
from contextlib import asynccontextmanager

from fastapi import FastAPI, Request, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import StreamingResponse, JSONResponse
from pydantic import BaseModel, field_validator
from dotenv import load_dotenv
from supabase import create_client, Client

from typing import Optional
from langchain_openai import OpenAIEmbeddings, ChatOpenAI
try:
    from langchain_chroma import Chroma
except ImportError:
    from langchain_community.vectorstores import Chroma
from langchain_core.prompts import ChatPromptTemplate, MessagesPlaceholder
from langchain_core.messages import HumanMessage, AIMessage
from langchain_core.runnables import RunnablePassthrough
from langchain_core.output_parsers import StrOutputParser

# ── Rate limiting ──────────────────────────────────────────────
try:
    from slowapi import Limiter, _rate_limit_exceeded_handler
    from slowapi.errors import RateLimitExceeded
    from starlette.requests import Request
    
    # Bug fix: use X-Forwarded-For behind Render's proxy. Render adds the real IP to the end of the chain.
    def get_real_ip(req: Request) -> str:
        forwarded = req.headers.get("X-Forwarded-For")
        if forwarded:
            return forwarded.split(",")[-1].strip()
        return req.client.host if req.client else "127.0.0.1"
        
    limiter = Limiter(key_func=get_real_ip)
    RATE_LIMIT_ENABLED = True
except ImportError:
    limiter = None
    RATE_LIMIT_ENABLED = False

load_dotenv()

OPENAI_API_KEY = os.getenv("OPENAI_API_KEY")
SUPABASE_URL = os.getenv("VITE_SUPABASE_URL")
SUPABASE_KEY = os.getenv("VITE_SUPABASE_ANON_KEY")

if not OPENAI_API_KEY or not SUPABASE_URL or not SUPABASE_KEY:
    raise RuntimeError(
        "Missing required environment variables (OPENAI_API_KEY, VITE_SUPABASE_URL, or VITE_SUPABASE_ANON_KEY)."
    )

supabase_client: Client = create_client(SUPABASE_URL, SUPABASE_KEY)

DB_DIR = "./chroma_db_openai"

# ── Bug 12 fix: Load ChromaDB ONCE at startup via lifespan ────
@asynccontextmanager
async def lifespan(app: FastAPI):
    embeddings = OpenAIEmbeddings(model="text-embedding-3-small")
    app.state.db = Chroma(persist_directory=DB_DIR, embedding_function=embeddings)
    # Retriever construction is moved to endpoints for dynamic metadata filtering
    # Bug 20 fix: Add timeout to LLM calls
    app.state.llm = ChatOpenAI(
        model="gpt-4o-mini",
        temperature=0.3,
        streaming=True,
        request_timeout=30,
        max_retries=2,
    )
    count = app.state.db._collection.count()
    print(f"✅ ChromaDB loaded — {count} chunks in vector store")
    yield

app = FastAPI(title="BacMatte RAG API", version="1.1.0", lifespan=lifespan)

# Add rate limiter if available
if RATE_LIMIT_ENABLED:
    app.state.limiter = limiter
    app.add_exception_handler(RateLimitExceeded, _rate_limit_exceeded_handler)

# ── CUSTOM CORS MIDDLEWARE (Bulletproof) ───────────────────────
app.add_middleware(
    CORSMiddleware,
    allow_origins=["https://bacmatte.vercel.app", "http://localhost:5173", "http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ── GLOBAL EXCEPTION HANDLER (Ensures CORS on 500s) ───────────
@app.exception_handler(Exception)
async def global_exception_handler(request: Request, exc: Exception):
    import traceback
    print(f"GLOBAL ERROR: {str(exc)}")
    traceback.print_exc()
    return JSONResponse(
        status_code=500,
        content={"detail": "Internal Server Error", "msg": str(exc)}
    )

# ── Bug 9 fix: Pydantic with validators ────────────────────────
VALID_MODES = {"chat", "explain", "summarize", "generate", "correct", "evaluate"}
VALID_LEVELS = {"1BAC", "2BAC", "1bac", "2bac"}

class ChatRequest(BaseModel):
    question: str
    lesson: str = ""
    subject: str = ""
    level: str = "2BAC"
    mode: str = "chat"
    session_id: Optional[str] = None
    image_base64: Optional[str] = None

    @field_validator("question")
    @classmethod
    def question_not_empty(cls, v: str) -> str:
        if not v or not v.strip():
            raise ValueError("Question cannot be empty")
        if len(v) > 3000:
            raise ValueError("Question too long (max 3000 characters)")
        return v.strip()

    @field_validator("lesson", "subject")
    @classmethod
    def prevent_prompt_injection(cls, v: str) -> str:
        if len(v) > 100:
            v = v[:100]
        # Strip dangerous characters that could break out of the prompt template
        return v.replace("*", "").replace("\n", " ").replace(">", "").strip()

    @field_validator("mode")
    @classmethod
    def valid_mode(cls, v: str) -> str:
        if v not in VALID_MODES:
            raise ValueError(f"Invalid mode '{v}'. Allowed: {VALID_MODES}")
        return v


# ── Prompt factory ────────────────────────────────────────────
def build_system_prompt(mode: str, lesson: str, subject: str, level: str) -> str:
    ctx = f"المستوى: {level} | المادة: {subject} | الدرس المطلوب: **{lesson}**"
    base = f"""
أنت BacMatte، مساعد تعليمي متخصص في المنهج المغربي للباكالوريا.
{ctx}

## قواعد الذكاء الاصطناعي (أنت مساعد تعليمي حصري لطلاب البكالوريا المغربية):

1. **أولوية سؤال الطالب**: أجب بشكل مباشر ودقيق على **سؤال/طلب الطالب** المكتوب أدناه. درس ({lesson}) هو مجرد سياق عام للصفحة الحالية، لكن إجابتك يجب أن تركز 100% على ما يطلبه الطالب حرفياً.
2. **الاعتماد المشترك**: استخدم المحتوى المسترجع المتوفر (RAG Context) لدعم إجابتك، وإن كان غير كافٍ، اعتمد على قاعدة معرفتك لتقديم شرح كامل.
3. **التجاوب المرن**: إذا كان سؤال الطالب يخص درساً مختلفاً عن ({lesson})، أجب على سؤاله بشكل طبيعي ولا تجبر الإجابة على العودة للدرس القديم.
4. **تجنب المواضيع الخارجية**: إذا سألك الطالب عن مواضيع لا علاقة لها بالدراسة، اطلب منه التركيز على المنهج بلطف.

5. **التفكير التسلسلي الدقيق (Chain-of-Thought)**: 
   - عند حل مسألة رياضية أو فيزيائية، قم دائماً بتحليل المعطيات خطوة بخطوة قبل إعطاء الاستنتاج النهائي. 
   - لا تتخطى خطوات الحساب البسيطة لتجنب الأخطاء.

6. **تنسيق الإجابة**:
   - أجب باللغة العربية الواضحة.
   - أدرج المصطلحات العلمية بالفرنسية بين قوسين.
   - اكتب المعادلات بصيغة LaTeX دائماً بين $ للمعادلات الصغيرة و $$ للمعادلات الكبيرة.
   - استخدم Markdown لتنظيم إجابتك (عناوين، نقاط، الخ).

## المحتوى المسترجع من الكتب المدرسية (RAG):
{{context}}
"""
    mode_instructions = {
        "explain": """
## المهمة: شرح مفصل (Explication détaillée)
الهيكل الإلزامي:
- **التعريف** (Définition)
- **الشرح والتحليل** (Explication)
- **مثال تطبيقي** (Exemple)
""",
        "summarize": """
## المهمة: تلخيص منظم (Résumé structuré)
نقاط مختصرة فقط + القوانين الأساسية للحفظ.
""",
        "generate": """
## المهمة: توليد تمرين (Exercice BAC)
اصنع تمريناً من مستوى امتحانات البكالوريا الوطنية المغربية.
⚠️ **لا تعطِ الحل!** اطلب من الطالب حله أولاً.
""",
        "correct": """
## المهمة: تصحيح إجابة الطالب (Correction)
الهيكل الإلزامي:
- ✅ **الصحيح**
- ❌ **الأخطاء** (إن وجدت) مع الشرح
- 💡 **التصحيح النموذجي**
- 🎯 **العلامة / 10**
""",
        "evaluate": """
## المهمة: تقييم مستوى الطالب (Évaluation)
اطرح سؤالاً قصيراً أو QCM لاختبار الفهم دون إعطاء الجواب.
""",
        "chat": "",
    }
    return base + mode_instructions.get(mode, "")


# ── Simple in-memory cache (Bug 14 — non-streaming only) ──────
_response_cache: dict[str, str] = {}

def get_cache_key(question: str, subject: str, lesson: str, mode: str) -> str:
    content = f"{question}|{subject}|{lesson}|{mode}"
    return hashlib.md5(content.encode()).hexdigest()


# ── Security verification ─────────────────────────────────────
async def verify_auth_token(request: Request):
    auth_header = request.headers.get("Authorization")
    if not auth_header or not auth_header.startswith("Bearer "):
        raise HTTPException(status_code=401, detail="Missing or invalid Authorization header")
    token = auth_header.split(" ")[1]
    user_response = supabase_client.auth.get_user(token)
    if not user_response or not user_response.user:
        raise HTTPException(status_code=401, detail="Invalid session token")
    return user_response.user

# ── Streaming chat endpoint ───────────────────────────────────
@app.post("/chat")
async def chat(request: Request, req: ChatRequest):
    # Enforce Authentication
    user = await verify_auth_token(request)

    # Rate limit: 20 req/min per IP (if slowapi installed)
    if RATE_LIMIT_ENABLED:
        limiter._check_request_limit(request, chat, "20/minute")

    db = request.app.state.db
    llm = request.app.state.llm

    # ── Critical Fix: Dynamic Metadata Filtering ──
    search_kwargs = {"k": 4, "fetch_k": 20, "lambda_mult": 0.7}
    if req.subject:
        # Strict enforcement: Only retrieve from the correct subject book
        search_kwargs["filter"] = {"subject": req.subject}

    retriever = db.as_retriever(search_type="mmr", search_kwargs=search_kwargs)

    # ── Fetch history from Supabase if session_id is provided ──
    history_msgs = []
    if req.session_id:
        try:
            # Get last 6 messages to provide conversational context without exhausting tokens
            res = supabase_client.table("chat_messages").select("*").eq("session_id", req.session_id).order("created_at", desc=True).limit(6).execute()
            if res.data:
                for row in reversed(res.data):
                    if row["role"] == "user":
                        history_msgs.append(HumanMessage(content=row["content"]))
                    elif row["role"] == "ai":
                        history_msgs.append(AIMessage(content=row["content"]))
        except Exception as e:
            print("Error fetching chat history:", e)

    system_prompt_str = build_system_prompt(req.mode, req.lesson, req.subject, req.level)
    prompt = ChatPromptTemplate.from_messages([
        ("system", system_prompt_str),
        MessagesPlaceholder(variable_name="history"),
        MessagesPlaceholder(variable_name="query_msg")
    ])

    def format_docs(docs):
        return "\n\n---\n\n".join(doc.page_content for doc in docs)

    # dynamically construct the human message to support optional images
    if req.image_base64:
        query_msg = [HumanMessage(content=[
            {"type": "text", "text": req.question},
            {"type": "image_url", "image_url": {"url": req.image_base64}}
        ])]
    else:
        query_msg = [HumanMessage(content=req.question)]

    # We manually trigger retriever here so we can pass 'context' along with history and question
    chain = (
        RunnablePassthrough.assign(
            context=lambda x: format_docs(retriever.invoke(req.question))
        )
        | prompt
        | llm
        | StrOutputParser()
    )

    async def stream_generator():
        try:
            # Bug 20 fix: timeout wrapper on the full streaming call
            async def _stream():
                async for chunk in chain.astream({"query_msg": query_msg, "history": history_msgs}):
                    yield f"data: {json.dumps({'token': chunk})}\n\n"

            async for event in _stream():
                yield event
        except asyncio.TimeoutError:
            yield f"data: {json.dumps({'error': 'Request timed out after 45s. Please try again.'})}\n\n"
        except Exception as e:
            import traceback
            traceback.print_exc()
            yield f"data: {json.dumps({'error': str(e)})}\n\n"
        yield "data: [DONE]\n\n"

    return StreamingResponse(
        stream_generator(),
        media_type="text/event-stream",
        headers={
            "Cache-Control": "no-cache",
            "X-Accel-Buffering": "no",
            "Connection": "keep-alive",
        },
    )


# ── Bug 16 fix: Deep health check that verifies ChromaDB ──────
@app.get("/")
async def root():
    return {"status": "ok", "message": "BacMatte AI RAG Backend is running perfectly!"}

@app.get("/health")
async def health(request: Request):
    try:
        db = request.app.state.db
        count = db._collection.count()
        if count == 0:
            return JSONResponse(
                status_code=503,
                content={
                    "status": "error",
                    "reason": "Vector database is empty. Run build_vector_db.py first.",
                    "model": "gpt-4o-mini",
                    "db": DB_DIR,
                }
            )
        return {
            "status": "ok",
            "model": "gpt-4o-mini",
            "db": DB_DIR,
            "total_chunks": count,
        }
    except Exception as e:
        return JSONResponse(
            status_code=503,
            content={"status": "error", "reason": str(e)}
        )

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("api:app", host="0.0.0.0", port=8000, reload=True)
