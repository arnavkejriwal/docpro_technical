# 🚀 TF-IDF Text Summarizer

This project is a web application that summarizes text using the TF-IDF (Term Frequency-Inverse Document Frequency) algorithm. It consists of a **FastAPI backend** for processing the text and a **React frontend** for user interaction.


# 💡 Setup and Usage

To setup and use this web app, follow these steps:

### Backend

- Navigate into the app directory

`cd app`

- Install required dependencies 

`pip install -r requirements.txt`

- Start the FastAPI server

`uvicorn main:app --reload`

- The backend server will then be running at http://127.0.0.1:8000

### Frontend

- Navigate to the frontend directory

`cd ../frontend`

- Install required dependencies 

`npm install`

- Start the React dev server

`npm start`

- The frontend will then be running at http://localhost:3000



Once you have both the frontend and backend running, on the React user interface, enter the text you wish to summarise, select the length of the summary you want (in sentences), and click the "Summarize" button

# ⚙️ How it Works

This project implements an extractive text summarization system using the TF-IDF (Term Frequency–Inverse Document Frequency) algorithm. The goal is to identify and extract the most relevant sentences from a body of text based on their term importance.

- TF-IDF Vectorization: Each sentence in the input text is tokenized and converted into a TF-IDF vector using TfidfVectorizer from sklearn. This helps quantify how important a word is in a sentence relative to the whole document.

- Sentence Scoring: The system computes the importance of each sentence by summing up the TF-IDF scores of its words.

- Summary Generation: The top N highest-scoring sentences (default is 1) are selected and returned as the extractive summary.

The backend is built using FastAPI, which exposes an API to process user-submitted text. The frontend is built using React, allowing users to interactively input text and view the generated summary in a user-friendly interface.


# ⚡️ Potential Improvements 

While the current system is good for basic summarization tasks, here are a few potential improvements that could be made to the web app to enhance its functionality:

- The web app can be designed using abstractive summarization models that reword the text instead of just extracting content from the input.

- The web app could be upgraded to support uploading documents and files instead of just manually typing in the input text.

- The web app could be upgraded to support multi-lingual summarization

   


