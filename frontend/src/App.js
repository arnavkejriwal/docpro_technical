import React, { useState } from "react";
import { IoSparklesOutline } from "react-icons/io5";

function App() {
  const [inputText, setInputText] = useState("");
  const [numSentences, setNumSentences] = useState(1);
  const [summary, setSummary] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://127.0.0.1:8000/summarize", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          input_text: inputText,
          num_sentences: numSentences,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch summary");
      }

      const data = await response.json();
      setSummary(data.summary);
    } catch (error) {
      console.error("Error:", error);
      setSummary("An error occurred while summarizing the text.");
    }
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", maxWidth: "800px", margin: "2rem auto", padding: "2.5rem", backgroundColor: "#f9f9f9", borderRadius: "30px", border: "1.5px solid #ccc", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", justifyContent: "center" }}>
      <h1 style={{ textAlign: "center", color: "#333", marginBottom: "2.5rem" }}>TF-IDF Text Summarizer</h1>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", direction: "row", gap: "1.25rem", paddingBottom: "1rem" }}>
          <textarea
            id="input_text"
            value={inputText}
            placeholder="Enter text to summarize..."
            onChange={(e) => setInputText(e.target.value)}
            required
            style={{
              width: "100%",
              height: "150px",
              padding: "0.75rem",
              border: "1px solid #ccc",
              borderRadius: "20px",
              fontSize: "1rem",
              resize: "none",
            }}
          ></textarea>
        </div>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", direction: "row", gap: "1rem" }}>
          <div style={{ display: "flex", gap: "1rem", direction: "row", alignItems: "center" }}>
            <label htmlFor="num_sentences" style={{ fontWeight: "bold", color: "#555" }}>Length of Summary (Sentences):</label>
            <select
              id="num_sentences"
              value={numSentences}
              onChange={(e) => setNumSentences(e.target.value)}
              style={{
                paddingTop: "0.25rem",
                paddingBottom: "0.25rem",
                paddingLeft: "1rem",
                borderTop: "1px solid #fff",
                borderBottom: "1px solid #fff",
                borderLeft: "1px solid #fff",
                borderRight: "11px solid #ccc",
                borderRadius: "30px",
                fontSize: "1rem",
                backgroundColor: "#ccc",
              }}
            >
              {[...Array(10).keys()].map((i) => (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </select>
          </div>

          <button
            type="submit"
            style={{
              paddingTop: "0.75rem",
              paddingBottom: "0.75rem",
              paddingLeft: "1.5rem",
              paddingRight: "1.5rem",
              backgroundColor: "#007BFF",
              color: "#fff",
              border: "none",
              borderRadius: "30px",
              fontSize: "1rem",
              cursor: "pointer",
              transition: "background-color 0.3s",
              alignItems: "baseline",
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#0056b3")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#007BFF")}
          >
            <IoSparklesOutline style={{ marginRight: "0.5rem" }} />
            Summarize
          </button>
        </div>
      </form>

      {summary && (
        <div style={{ marginTop: "3rem", padding: "1rem", backgroundColor: "#e9ecef", borderRadius: "20px", border: "1px solid #ccc" }}>
          <h2 style={{ color: "#333", marginBottom: "1rem" }}>Summary</h2>
          <p style={{ fontSize: "1rem", lineHeight: "1.5", color: "#555" }}>{summary}</p>
        </div>
      )}
    </div>
  );
}

export default App;