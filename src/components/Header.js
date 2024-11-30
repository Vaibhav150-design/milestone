// src/components/Header.js
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="logo">
        <h1>Food Delivery</h1>
      </div>
      <nav className={`nav-links ${isMenuOpen ? "open" : ""}`}>
        <Link to="/" className={location.pathname === "/" ? "active" : ""}>Home</Link>
        <Link to="/menu" className={location.pathname === "/menu" ? "active" : ""}>Menu</Link>
        <Link to="/cart" className={location.pathname === "/cart" ? "active" : ""}>Cart</Link>
        <Link to="/contact" className={location.pathname === "/contact" ? "active" : ""}>Contact</Link>
        <Link to="/about" className={location.pathname === "/about" ? "active" : ""}>About Us</Link>
        <Link to="/signup-login" className={location.pathname === "/signup-login" ? "active" : ""}>Login</Link>
      </nav>
      <div className="hamburger" onClick={toggleMenu}>
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
      </div>
    </header>
  );
};

export default Header;
