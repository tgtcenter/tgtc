import React, { useState } from "react";
import "../css/Contact.css";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
    // Add form submission logic here
  };

  return (
    <div className="contact-container">
      <h1 className="contact-header">Contact Us</h1>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label className="contact-label" htmlFor="name">
          Name:
        </label>
        <input
          className="contact-input"
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label className="contact-label" htmlFor="email">
          Email:
        </label>
        <input
          className="contact-input"
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label className="contact-label" htmlFor="message">
          Message:
        </label>
        <textarea
          className="contact-textarea"
          id="message"
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />

        <button className="contact-button" type="submit">
          Send
        </button>
      </form>
    </div>
  );
}

export default Contact;
