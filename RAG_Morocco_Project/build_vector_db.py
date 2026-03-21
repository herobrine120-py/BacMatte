import os
import sys
from dotenv import load_dotenv

# Langchain imports
from langchain_community.document_loaders import TextLoader
from langchain_text_splitters import MarkdownTextSplitter
from langchain_openai import OpenAIEmbeddings
from langchain_community.vectorstores import Chroma

load_dotenv()

apiAPI_KEY = os.getenv("OPENAI_API_KEY")
if not apiAPI_KEY:
    print("Please set your OPENAI_API_KEY in the .env file")
    exit(1)

# Initialize OpenAI Embeddings
embeddings = OpenAIEmbeddings(model="text-embedding-3-small")
DB_DIR = "./chroma_db_openai"

from langchain_community.document_loaders import DirectoryLoader, TextLoader

def ingest_markdowns(md_dir_path):
    print(f"Loading documents from directory: {md_dir_path}...")
    
    # 1. Load the markdown documents
    loader = DirectoryLoader(md_dir_path, glob="*.md", loader_cls=TextLoader, loader_kwargs={'encoding': 'utf-8'})
    documents = loader.load()
    
    # 2. Split the markdown into chunks
    # Bug 8 fix: smaller chunks (400 tokens) with overlap — one concept per chunk
    splitter = MarkdownTextSplitter(
        chunk_size=400,
        chunk_overlap=80,
    )
    docs = splitter.split_documents(documents)
    
    print(f"Split the document into {len(docs)} chunks.")
    
    # 3. Create Emdeddings and store them in Vector DB
    print("Generating embeddings and saving to ChromaDB...")
    db = Chroma.from_documents(
        docs, 
        embeddings, 
        persist_directory=DB_DIR
    )
    
    print(f"\n✅ Successfully built RAG Database at {DB_DIR}")

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python build_vector_db.py <path_to_markdown_directory>")
    else:
        ingest_markdowns(sys.argv[1])
