import React, { useState } from "react";
import "../css/Contact.css";

function Contact() {
  const [name, setName] = useState("");
  const [qualification, setQualification] = useState("");
  const [location, setLocation] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
    // Add form submission logic here
  };

  return (
    
      <div className="contact-container">
        <h2>Contact Us</h2>
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

          <label className="contact-label" htmlFor="qualification">
            Qualification:
          </label>
          <input
            className="contact-input"
            type="text"
            id="qualification"
            name="qualification"
            value={qualification}
            onChange={(e) => setQualification(e.target.value)}
            required
          />

          <label className="contact-label" htmlFor="location">
            Location:
          </label>
          <input
            className="contact-input"
            type="text"
            id="location"
            name="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
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
