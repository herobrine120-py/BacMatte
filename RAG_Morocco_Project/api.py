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

from langchain_openai import OpenAIEmbeddings, ChatOpenAI
try:
    from langchain_chroma import Chroma
except ImportError:
    from langchain_community.vectorstores import Chroma
from langchain_core.prompts import ChatPromptTemplate
from langchain_core.runnables import RunnablePassthrough
from langchain_core.output_parsers import StrOutputParser

# ── Rate limiting ──────────────────────────────────────────────
try:
    from slowapi import Limiter, _rate_limit_exceeded_handler
    from slowapi.errors import RateLimitExceeded
    from starlette.requests import Request
    
    # Bug fix: use X-Forwarded-For behind Render's proxy, fallback to client host
    def get_real_ip(req: Request) -> str:
        return req.headers.get("X-Forwarded-For", req.client.host if req.client else "127.0.0.1").split(",")[0]
        
    limiter = Limiter(key_func=get_real_ip)
    RATE_LIMIT_ENABLED = True
except ImportError:
    limiter = None
    RATE_LIMIT_ENABLED = False

load_dotenv()

# ── Bug 4 fix: Validate API key on startup, not lazily ────────
OPENAI_API_KEY = os.getenv("OPENAI_API_KEY")
if not OPENAI_API_KEY:
    raise RuntimeError(
        "OPENAI_API_KEY is missing from .env file. Cannot start server.\n"
        "Create RAG_Morocco_Project/.env with: OPENAI_API_KEY=sk-..."
    )

DB_DIR = "./chroma_db_openai"

# ── Bug 12 fix: Load ChromaDB ONCE at startup via lifespan ────
@asynccontextmanager
async def lifespan(app: FastAPI):
    embeddings = OpenAIEmbeddings(model="text-embedding-3-small")
    app.state.db = Chroma(persist_directory=DB_DIR, embedding_function=embeddings)
    # Bug 13 fix: Use MMR retrieval to avoid duplicate chunks
    app.state.retriever = app.state.db.as_retriever(
        search_type="mmr",
        search_kwargs={"k": 4, "fetch_k": 20, "lambda_mult": 0.7}
    )
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

# ── Bug# ── CORS configuration ──────────────────────────────────────────
# Using explicit origins is more reliable than "*" for some browser/proxy setups
allowed_origins = [
    "https://bacmatte.vercel.app",
    "http://localhost:5173",
    "http://localhost:3000",
    "*"  # Fallback
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=allowed_origins,
    allow_credentials=False,
    allow_methods=["*"],
    allow_headers=["*"],
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

    @field_validator("question")
    @classmethod
    def question_not_empty(cls, v: str) -> str:
        if not v or not v.strip():
            raise ValueError("Question cannot be empty")
        if len(v) > 3000:
            raise ValueError("Question too long (max 3000 characters)")
        return v.strip()

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

## قواعد صارمة لا يمكن تجاوزها:

1. **التحقق من السياق أولاً**: قبل الإجابة، تحقق من أن المحتوى المسترجع (RAG Context) يتحدث عن الدرس المحدد أعلاه.

2. **إذا كان المحتوى المسترجع لا يطابق الدرس المطلوب**، أجب بهذا الرد الحرفي فقط:
```
⚠️ عذراً، لا يوجد في قاعدة بياناتي محتوى كافٍ لدرس **{lesson}** حالياً.
يرجى:
- التأكد من اختيار الدرس الصحيح من القائمة الجانبية.
- أو إعادة صياغة سؤالك ليتضمن اسم الدرس بوضوح.
```

3. **لا تُجب أبداً** بمحتوى درس آخر غير المحدد في الطلب، حتى وإن كان الموضوع قريباً.

4. **إذا طابق المحتوى الدرس المطلوب**:
   - أجب باللغة العربية الواضحة.
   - أدرج المصطلحات العلمية بالفرنسية بين قوسين.
   - اكتب المعادلات بصيغة LaTeX دائماً بين $ للمعادلات الصغيرة و $$ للمعادلات الكبيرة.
   - استخدم Markdown بوضوح: عناوين، نقاط، وصيغ.

## المحتوى المسترجع من الكتب المدرسية (RAG):
{{context}}

## سؤال/طلب الطالب:
{{question}}
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


# ── Streaming chat endpoint ───────────────────────────────────
@app.post("/chat")
async def chat(request: Request, req: ChatRequest):
    # Rate limit: 20 req/min per IP (if slowapi installed)
    if RATE_LIMIT_ENABLED:
        await limiter._check_request_limit(request, chat, "20/minute")

    retriever = request.app.state.retriever
    llm = request.app.state.llm

    system_prompt_str = build_system_prompt(req.mode, req.lesson, req.subject, req.level)
    prompt = ChatPromptTemplate.from_template(system_prompt_str)

    def format_docs(docs):
        return "\n\n---\n\n".join(doc.page_content for doc in docs)

    chain = (
        {"context": retriever | format_docs, "question": RunnablePassthrough()}
        | prompt
        | llm
        | StrOutputParser()
    )

    async def stream_generator():
        try:
            # Bug 20 fix: timeout wrapper on the full streaming call
            async def _stream():
                async for chunk in chain.astream(req.question):
                    yield f"data: {json.dumps({'token': chunk})}\n\n"

            async for event in _stream():
                yield event
        except asyncio.TimeoutError:
            yield f"data: {json.dumps({'error': 'Request timed out after 45s. Please try again.'})}\n\n"
        except Exception as e:
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
