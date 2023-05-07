import React, { useState } from "react";
import "../components/css/Navbar.css";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  function toggleMenu() {
    setShowMenu(!showMenu);
  }
  return (
    <nav className="navbar">
      <a href="/" className="navbar-logo">
        T G T C
      </a>
      <button
        className="navbar-toggler"
        aria-label="Toggle navigation"
        onClick={toggleMenu}
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <ul className={`navbar-menu${showMenu ? " show" : ""}`}>
        <li className="navbar-item">
          <a href="/" className="navbar-link">
            Home
          </a>
        </li>
        <li className="navbar-item">
          <a href="/services" className="navbar-link">
            Services
          </a>
        </li>
        <li className="navbar-item">
          <a href="/about" className="navbar-link">
            About
          </a>
        </li>
        <li className="navbar-item">
          <a href="/contact" className="navbar-link">
            Contact Us
          </a>
        </li>
        <li className="navbar-item">
          <a href="/admin" className="navbar-link">
            Admin Login
          </a>
        </li>
      </ul>
    </nav>
  );
}
