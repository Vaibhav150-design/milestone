// src/pages/Home.js
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import pizza from "../assets/pizza.jpg";
import burger from "../assets/burger.jpg";
import pasta from "../assets/pasta.jpg";
import sandwich from "../assets/sandwich.jpeg";

const Home = () => {
  const [taglineIndex, setTaglineIndex] = useState(0);
  const taglines = [
    "Delicious meals, delivered to your door!",
    "Craving something special? We've got you covered!",
    "Order now and enjoy great discounts!",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTaglineIndex((prevIndex) => (prevIndex + 1) % taglines.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const featuredItems = [
    { id: 1, name: "Pizza", description: "Cheesy and delicious", price: "Rs 100", image: pizza },
    { id: 2, name: "Burger", description: "Juicy and flavorful", price: "Rs 89", image: burger },
    { id: 3, name: "Pasta", description: "Rich and creamy", price: "Rs 89", image: pasta },
    { id: 4, name: "Sandwich", description: "Grilled chicken sandwich", price: "Rs 80", image: sandwich },
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <h1>Welcome to Food Delivery</h1>
        <h2 className="dynamic-tagline">{taglines[taglineIndex]}</h2>
        <Link to="/menu" className="cta-button">Browse Menu</Link>
      </section>

      {/* Featured Menu Section */}
      <section className="featured-menu">
        <h2>Featured Menu</h2>
        <div className="menu-grid">
          {featuredItems.map((item) => (
            <div className="menu-item" key={item.id}>
              <img src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p className="price">{item.price}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <h2>What Our Customers Say</h2>
        <div className="testimonial-cards">
          <div className="testimonial-card">
            <p>"The food is amazing and always arrives on time!"</p>
            <p>- Sarah K.</p>
          </div>
          <div className="testimonial-card">
            <p>"Love the variety and quality of the menu items."</p>
            <p>- John D.</p>
          </div>
          <div className="testimonial-card">
            <p>"Excellent service and delicious food every time."</p>
            <p>- Emma R.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
