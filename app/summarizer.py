import nltk
import numpy as np
from sklearn.feature_extraction.text import TfidfVectorizer
from nltk.tokenize import sent_tokenize

nltk.download("punkt")
nltk.download("punkt_tab")

def summarize_tfidf(text, num_sentences=1):
    sentences = sent_tokenize(text)

    if len(sentences) <= num_sentences:
        return text  

    vectorizer = TfidfVectorizer()
    tfidf_matrix = vectorizer.fit_transform(sentences)

    sentence_scores = tfidf_matrix.sum(axis=1).flatten().tolist()[0]

    top_indices = np.argsort(sentence_scores)[::-1][:num_sentences]
    top_sentences = [sentences[i] for i in sorted(top_indices)]

    return " ".join(top_sentences)

