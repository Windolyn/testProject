import { useState } from "react";
import "./App.css";

function App() {
  const [answer, setAnswer] = useState("");   // stores input
  const [submitted, setSubmitted] = useState(""); // stores submitted text

  const handleSubmit = () => {
    setSubmitted(answer);
  };

  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h1>Question: What is your name?</h1>

      <input
        type="text"
        placeholder="Type your answer..."
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        style={{ padding: "8px", marginRight: "10px" }}
      />

      <button onClick={handleSubmit}>Enter</button>

      {submitted && <h2>You answered: {submitted}</h2>}
    </div>
  );
}

export default App;
