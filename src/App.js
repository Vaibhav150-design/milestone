// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CartProvider } from "./CartContext";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import OrderCustomization from "./pages/OrderCustomization";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import About from "./pages/About";
import SignUpLogin from "./pages/SignUpLogin";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./App.css";

function App() {
  return (
    <CartProvider>
      <Router>
        <div>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/order/:id" element={<OrderCustomization />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/signup-login" element={<SignUpLogin />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
