import React, { useState } from "react";
import bannerImg from "../assets/Forms-bro.png";
import "../components/css/StudentForm.css";

export default function StudentForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="student-form">
      <h1>Register Now 👉</h1>
      <img src={bannerImg} alt="banner" />
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />

        <label htmlFor="phone">Phone:</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
          required
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
