import React, { useState } from "react";
import bannerImg from "../assets/Forms-bro.png";
import "../components/css/StudentForm.css";

export default function StudentForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");


  const handleSubmit = (event) => {
    event.preventDefault();
    // Submit form logic goes here
    console.log("Form submitted!");
  };

  return (
    <div className="student-form">
    <h1>Register Now 👉</h1>
      <img src={bannerImg} alt="banner" />
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={firstName}
          onChange={(event) => setFirstName(event.target.value)}
          required
        />

        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={lastName}
          onChange={(event) => setLastName(event.target.value)}
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
