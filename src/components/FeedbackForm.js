// src/components/FeedbackForm.js
import React, { useState } from "react";

const FeedbackForm = () => {
  const [feedback, setFeedback] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Feedback submitted!");
    setFeedback("");
  };

  return (
    <form onSubmit={handleSubmit} className="feedback-form">
      <textarea
        placeholder="Your feedback"
        value={feedback}
        onChange={(e) => setFeedback(e.target.value)}
        required
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default FeedbackForm;
