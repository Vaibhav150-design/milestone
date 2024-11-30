// src/pages/Contact.js
import React, { useState } from "react";
import FeedbackForm from "../components/FeedbackForm";

const Contact = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="contact">
      <h2>Contact Us</h2>
      <p>If you have any questions or feedback, feel free to reach out!</p>
      <button onClick={() => setShowForm(!showForm)}>Contact Form</button>
      {showForm && <FeedbackForm />}
    </div>
  );
};

export default Contact;
