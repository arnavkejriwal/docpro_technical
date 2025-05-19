from fastapi import FastAPI, Form
from fastapi.middleware.cors import CORSMiddleware
from app.summarizer import summarize_tfidf

app = FastAPI()

# Allow CORS for the React frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # React dev server URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/summarize")
def summarize(input_text: str = Form(...), num_sentences: int = Form(...)):
    summary = summarize_tfidf(input_text, num_sentences)
    return {"summary": summary}