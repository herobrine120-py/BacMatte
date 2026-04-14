import os
import sys
from dotenv import load_dotenv

# Langchain imports
from langchain_community.document_loaders import TextLoader
from langchain_text_splitters import RecursiveCharacterTextSplitter, MarkdownHeaderTextSplitter
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
    
    # 1.5 Inject Metadata based on filename (Critical for avoiding cross-subject retrieval bugs)
    for doc in documents:
        filename = os.path.basename(doc.metadata.get("source", ""))
        subject = "Physique-Chimie" # Default
        if "math" in filename.lower() or "analyse" in filename.lower() or "algebre" in filename.lower():
            subject = "Mathématiques"
        elif "svt" in filename.lower() or "bio" in filename.lower():
            subject = "SVT"
        
        doc.metadata["subject"] = subject
        # Use filename prefix as lesson identifier
        doc.metadata["lesson"] = filename.replace("_gemini_extracted.md", "").replace(".md", "")
    
    # 2. Split the markdown into chunks using Markdown-aware splitting
    headers_to_split_on = [
        ("#", "Header 1"),
        ("##", "Header 2"),
        ("###", "Header 3"),
    ]
    markdown_splitter = MarkdownHeaderTextSplitter(headers_to_split_on=headers_to_split_on)
    
    # Fallback recursive splitter for very long sections under a single header
    text_splitter = RecursiveCharacterTextSplitter(
        chunk_size=1200,
        chunk_overlap=200,
        separators=["\n\n", "\n", " ", ""]
    )
    
    docs = []
    for doc in documents:
        # Split by headers first
        md_header_splits = markdown_splitter.split_text(doc.page_content)
        # Merge original document metadata (subject/lesson) into the new smart chunks
        for md_split in md_header_splits:
            md_split.metadata.update(doc.metadata)
        # Split further if needed
        splits = text_splitter.split_documents(md_header_splits)
        docs.extend(splits)
    
    print(f"Split {len(documents)} documents into {len(docs)} smart chunks.")
    
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
