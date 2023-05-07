import React, { useState } from "react";
import "../css/AdminLogin.css";

export default function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Login logic goes here
    console.log("Logged in!");
  };

  return (
    <div className="admin-login-container">
      <h2 className="admin-login-heading">Admin Login</h2>
      <form className="admin-login-form" onSubmit={handleSubmit}>
        <label className="admin-login-label" htmlFor="username">
          Username:
        </label>
        <input
          className="admin-login-input"
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          required
        />

        <label className="admin-login-label" htmlFor="password">
          Password:
        </label>
        <input
          className="admin-login-input"
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
        />

        <button className="admin-login-button" type="submit">
          Login
        </button>
      </form>
    </div>
  );
}
