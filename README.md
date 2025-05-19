# 🚀 TF-IDF Text Summarizer

This project is a web application that summarizes text using the TF-IDF (Term Frequency-Inverse Document Frequency) algorithm. It consists of a **FastAPI backend** for processing the text and a **React frontend** for user interaction.

---

## 🎓 Setup and Usage

To setup and use this web app, follow these steps:

# Backend

- Navigate into the app directory

`cd app`

- Install required dependencies 

`pip install -r requirements.txt`

- Start the FastAPI server

`uvicorn main:app --reload`

- The backend server will then be running at http://127.0.0.1:8000

# Frontend

- Navigate to the frontend directory

`cd ../frontend`

- Install required dependencies 

`npm install`

- Start the React dev server

`npm start`

- The frontend will then be running at http://localhost:3000

Once you have both the frontend and backend running, on the React user interface, enter the text you wish to summarise, select the length of the summary you want (in sentences), and click the "Summarize" button


