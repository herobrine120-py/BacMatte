import os
import sys
import io

# Force UTF-8 encoding for standard output to support Arabic characters in the Windows console
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

from dotenv import load_dotenv

from langchain_openai import OpenAIEmbeddings, ChatOpenAI
from langchain_community.vectorstores import Chroma
from langchain_core.prompts import ChatPromptTemplate
from langchain_core.runnables import RunnablePassthrough
from langchain_core.output_parsers import StrOutputParser

load_dotenv()

API_KEY = os.getenv("OPENAI_API_KEY")
if not API_KEY:
    print("Please set your OPENAI_API_KEY in the .env file")
    exit(1)

# ========== Vector DB & Embeddings ==========
embeddings = OpenAIEmbeddings(model="text-embedding-3-small")
DB_DIR = "./chroma_db_openai"

db = Chroma(persist_directory=DB_DIR, embedding_function=embeddings)
retriever = db.as_retriever(search_kwargs={"k": 5})

# ========== LLM ==========
# Using GPT-4o-mini because it is very cost-effective
llm = ChatOpenAI(model="gpt-4o-mini", temperature=0.3)

# ========== Moroccan Curriculum Prompt ==========
SYSTEM_PROMPT = """
أنت مساعد تعليمي ذكي متخصص في المنهج المغربي للثانوية التأهيلية (مادة الرياضيات والفيزياء والكيمياء).

قواعد صارمة يجب احترامها في كل إجابة:
1. تشرح وتتواصل باللغة العربية الفصيحة المبسطة (أو الدارجة إذا احتجت لتبسيط مفهوم).
2. جميع المصطلحات العلمية، أسماء القوانين، والمعادلات تبقى باللغة الفرنسية كما هي في المقرر (مثل: Limite, Dérivée, Continuité, etc.)
3. المعادلات الرياضية تُكتب دائماً بصيغة LaTeX دقيقة (مثال: $f'(x) = \lim_{{h \to 0}} \frac{{f(x+h)-f(x)}}{{h}}$).
4. هيكل الإجابة يتبع دائماً هذا الترتيب:
   - **الشرح المبسط** (بالعربية)
   - **القوانين والعلاقات الأساسية** (Les formules essentielles - بالفرنسية مع شرح عربي)
   - **مثال تطبيقي** (Exemple) إذا طلب التلميذ ذلك
   - **التمارين** (Exercices) حسب المستوى المختار (سهل / متوسط / صعب) إذا طلب التلميذ ذلك
5. عند التصحيح، اشرح كل خطوة بتفصيل تام.
6. عند سؤالك عن ملخص (Résumé/Fiche)، قدّم خطاطة شاملة منظمة.

السياق المسترجع من قاعدة بيانات المنهج المغربي:
{context}

سؤال التلميذ:
{question}
"""

prompt = ChatPromptTemplate.from_template(SYSTEM_PROMPT)

def format_docs(docs):
    return "\n\n---\n\n".join(doc.page_content for doc in docs)

# ========== RAG Chain ==========
rag_chain = (
    {"context": retriever | format_docs, "question": RunnablePassthrough()}
    | prompt
    | llm
    | StrOutputParser()
)

# ========== Interactive Chat Loop ==========
def main():
    print("="*60)
    print(" مرحباً بك في المساعد التعليمي - المنهج المغربي 2BAC")
    print(" Bienvenue dans le tuteur IA - Programme Marocain 2BAC")
    print("="*60)
    print("اكتب سؤالك بالعربية أو الفرنسية. اكتب 'خروج' للإنهاء.")
    print()

    while True:
        question = input("التلميذ: ").strip()
        if not question:
            continue
        if question in ["خروج", "exit", "quit"]:
            print("وداعاً! بالتوفيق في دراستك!")
            break

        print("\nالمساعد: (جاري البحث في المنهج...)\n")

        try:
            response = rag_chain.invoke(question)
            print(f"المساعد:\n{response}")
        except Exception as e:
            print(f"خطأ: {e}")
        print("\n" + "-"*60 + "\n")

if __name__ == "__main__":
    main()
