import os
import json
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import StreamingResponse
from pydantic import BaseModel
from dotenv import load_dotenv

from langchain_openai import OpenAIEmbeddings, ChatOpenAI
try:
    from langchain_chroma import Chroma
except ImportError:
    from langchain_community.vectorstores import Chroma
from langchain_core.prompts import ChatPromptTemplate
from langchain_core.runnables import RunnablePassthrough
from langchain_core.output_parsers import StrOutputParser

load_dotenv()

app = FastAPI(title="BacMatte RAG API", version="1.0.0")

# Allow React frontend (any origin in dev, restrict in production)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # In production: ["https://bacmatte.ma"]
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ── Load RAG components once at startup ──────────────────────
embeddings = OpenAIEmbeddings(model="text-embedding-3-small")
DB_DIR = "./chroma_db_openai"
db = Chroma(persist_directory=DB_DIR, embedding_function=embeddings)
retriever = db.as_retriever(search_kwargs={"k": 5})
llm = ChatOpenAI(model="gpt-4o-mini", temperature=0.3, streaming=True)


# ── Request schema ─────────────────────────────────────────────
class ChatRequest(BaseModel):
    question: str
    lesson: str = ""
    subject: str = ""
    level: str = "2BAC"
    mode: str = "chat"   # chat | explain | summarize | generate | correct | evaluate


# ── Prompt factory ────────────────────────────────────────────
def build_system_prompt(mode: str, lesson: str, subject: str, level: str) -> str:
    ctx = f"المستوى: {level} | المادة: {subject} | الدرس: {lesson}"
    base = f"""
أنت BacMatte، مساعد تعليمي ذكي ومتخصص في المنهج المغربي للباكالوريا (Baccalauréat marocain).
{ctx}

قواعد صارمة:
1. أجب باللغة العربية الواضحة المبسطة.
2. أدرج المصطلحات العلمية بالفرنسية بين قوسين (مثل: Dérivée، Énergie cinétique).
3. اكتب المعادلات بصيغة LaTeX دائماً.
4. **لا تخرج أبداً عن سياق الدرس المحدد.**
5. استخدم Markdown بوضوح: عناوين، نقاط، وصيغ.

المحتوى المسترجع من الكتب المدرسية (RAG):
{{context}}

سؤال/طلب الطالب:
{{question}}
"""
    mode_instructions = {
        "explain": """
المهمة: **شرح مفصل** (Explication détaillée).
الهيكل الإلزامي:
- **التعريف** (Définition)
- **الشرح والتحليل** (Explication)
- **مثال تطبيقي** (Exemple)
""",
        "summarize": """
المهمة: **تلخيص منظم** (Résumé structuré).
الهيكل: نقاط مختصرة فقط + القوانين الأساسية للحفظ.
""",
        "generate": """
المهمة: **توليد تمرين** (Exercice).
اصنع تمريناً من مستوى امتحانات البكالوريا الوطنية.
⚠️ **لا تعطِ الحل!** اطلب من الطالب حله أولاً.
""",
        "correct": """
المهمة: **تصحيح إجابة الطالب** (Correction).
الهيكل الإلزامي:
- ✅ **الصحيح**
- ❌ **الأخطاء** (إن وجدت) مع الشرح
- 💡 **التصحيح النموذجي**
- 🎯 **العلامة من 10**
""",
        "evaluate": """
المهمة: **تقييم مستوى الطالب** (Évaluation).
اطرح سؤالاً قصيراً أو QCM لاختبار الفهم دون إعطاء الجواب.
""",
        "chat": "",
    }
    return base + mode_instructions.get(mode, "")


# ── Streaming chat endpoint ───────────────────────────────────
@app.post("/chat")
async def chat(req: ChatRequest):
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
            async for chunk in chain.astream(req.question):
                # Send each token as a Server-Sent Event
                yield f"data: {json.dumps({'token': chunk})}\n\n"
        except Exception as e:
            yield f"data: {json.dumps({'error': str(e)})}\n\n"
        yield "data: [DONE]\n\n"

    return StreamingResponse(
        stream_generator(),
        media_type="text/event-stream",
        headers={"Cache-Control": "no-cache", "X-Accel-Buffering": "no"},
    )


# ── Health check ─────────────────────────────────────────────
@app.get("/health")
def health():
    return {"status": "ok", "model": "gpt-4o-mini", "db": DB_DIR}


if __name__ == "__main__":
    import uvicorn
    uvicorn.run("api:app", host="0.0.0.0", port=8000, reload=True)
