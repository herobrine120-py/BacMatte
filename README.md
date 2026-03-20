<h1 align="center">🎓 BacMatte — منصة الذكاء الاصطناعي للباكالوريا المغربية</h1>

<p align="center">
  <strong>AI-Powered Learning Platform for Moroccan High School Students (1BAC & 2BAC)</strong><br>
  Built with React + FastAPI + LangChain + OpenAI + ChromaDB
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-18-61DAFB?style=flat&logo=react" />
  <img src="https://img.shields.io/badge/FastAPI-0.111-009688?style=flat&logo=fastapi" />
  <img src="https://img.shields.io/badge/OpenAI-GPT--4o--mini-412991?style=flat&logo=openai" />
  <img src="https://img.shields.io/badge/LangChain-RAG-1C3C3C?style=flat" />
  <img src="https://img.shields.io/badge/ChromaDB-Vector%20DB-orange?style=flat" />
</p>

---

## ✨ Features

- **📚 Structured Learning** — RAG-powered tutor strictly scoped to the Moroccan national curriculum
- **🧠 5 AI Modes** — Explain, Summarize, Generate Exercises, Correct Answers, Evaluate Level
- **🌐 Bilingual** — Arabic explanations with French scientific terminology
- **⚡ Streaming Responses** — Real-time token-by-token display (Server-Sent Events)
- **📱 Responsive** — Works on desktop and mobile
- **🏛️ Covers** — Mathematics, Physics-Chemistry, Life Sciences, Philosophy, Arabic

---

## 🏗️ Architecture

```text
BacMatte-React/          ← Vite + React frontend (port 5173)
RAG_Morocco_Project/     ← Python backend
  ├── api.py             ← FastAPI server (port 8000)
  ├── build_vector_db.py ← Populates ChromaDB from Markdown files
  ├── extract_openai.py  ← Extracts text from PDF textbooks via GPT-4o Vision
  └── batch_extract.py   ← Processes all 8 textbooks in bulk
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js ≥ 18
- Python ≥ 3.10
- An **OpenAI API Key** (needs credit for GPT-4o-mini + text-embedding-3-small)

---

### 1. Clone the repo
```bash
git clone https://github.com/YOUR_USERNAME/BacMatte.git
cd BacMatte
```

### 2. Set up the Python backend
```bash
cd RAG_Morocco_Project

# Install dependencies
pip install -r requirements.txt

# Create .env file and add your key
echo "OPENAI_API_KEY=sk-..." > .env

# Start the API server
uvicorn api:app --reload
```
> The API will be available at **http://localhost:8000**  
> Health check: http://localhost:8000/health

### 3. Set up the React frontend
```bash
cd ../BacMatte-React

# Install dependencies
npm install

# Start the dev server
npm run dev
```
> Open **http://localhost:5173** in your browser

---

## 📁 Project Structure

```text
BacMatte/
├── BacMatte-React/
│   ├── src/
│   │   ├── api.js          ← Fetch + SSE client for the RAG API
│   │   ├── pages/
│   │   │   ├── Landing.jsx ← Marketing landing page
│   │   │   ├── Select.jsx  ← Level & subject selector
│   │   │   └── Tutor.jsx   ← Main 3-panel AI tutor interface ⭐
│   │   ├── i18n.js         ← Translations (AR/FR/EN) + lesson lists
│   │   └── index.css       ← All styling
│   └── .env.example
└── RAG_Morocco_Project/
    ├── api.py              ← FastAPI + LangChain RAG server ⭐
    ├── build_vector_db.py  ← ChromaDB builder
    ├── extract_openai.py   ← PDF → Markdown via GPT-4o Vision
    ├── batch_extract.py    ← Batch processor for all textbooks
    └── requirements.txt
```

---

## 🔑 Environment Variables

| File | Variable | Description |
|------|----------|-------------|
| `RAG_Morocco_Project/.env` | `OPENAI_API_KEY` | Your OpenAI secret key |
| `BacMatte-React/.env` | `VITE_API_URL` | Backend URL (default: http://localhost:8000) |

---

## 🤝 Contributing
Pull requests are welcome!

## 📄 License
MIT © BacMatte Team — Made with ❤️ for Moroccan students
