import os
from dotenv import load_dotenv
from langchain_openai import OpenAIEmbeddings, ChatOpenAI
from langchain_chroma import Chroma

load_dotenv()
DB_DIR = "./chroma_db_openai"
embeddings = OpenAIEmbeddings(model="text-embedding-3-small")
db = Chroma(persist_directory=DB_DIR, embedding_function=embeddings)

query = "Fonctions exponentielles - الدوال الأسية"
# test retrieval
docs = db.similarity_search(query, k=4)
print(f"--- QUERY: {query} ---")
for i, doc in enumerate(docs):
    print(f"CHUNK {i+1}:")
    print(doc.page_content[:200].replace('\n', ' '))
    print("...")

# Test the AI Model's strict prompt
llm = ChatOpenAI(model="gpt-4o-mini", temperature=0.3)
system_prompt = f"""
أنت BacMatte، مساعد تعليمي متخصص في المنهج المغربي للباكالوريا.
المستوى: 2BAC | المادة: Physique-Chimie | الدرس المطلوب: **{query}**

## قواعد صارمة لا يمكن تجاوزها:
1. التحقق من السياق أولاً: قبل الإجابة، تحقق من أن المحتوى المسترجع (RAG Context) يتحدث عن الدرس المحدد أعلاه.
2. إذا كان المحتوى المسترجع لا يطابق الدرس المطلوب، أجب بهذا الرد الحرفي فقط:
⚠️ عذراً، لا يوجد في قاعدة بياناتي محتوى كافٍ لدرس **{query}** حالياً.

المحتوى المسترجع من الكتب المدرسية (RAG):
{" ".join([doc.page_content for doc in docs])}

سؤال/طلب الطالب:
اشرح لي الدرس
"""
resp = llm.invoke(system_prompt)
print("\n--- AI RESPONSE ---")
print(resp.content)
