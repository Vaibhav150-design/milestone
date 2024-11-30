// src/pages/CustomizeOrder.js
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

const CustomizeOrder = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  
  // Get the item details passed from Home page
  const item = location.state;

  const [customization, setCustomization] = useState({
    size: "Medium",
    toppings: [],
    extraCheese: false,
  });

  // Handle change in customization
  const handleCustomizationChange = (e) => {
    const { name, value, type, checked } = e.target;
    setCustomization((prevCustomization) => ({
      ...prevCustomization,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // Add item to cart and navigate to cart page
  const handleProceedToCart = () => {
    const updatedItem = {
      ...item,
      customization,
    };
    addToCart(updatedItem);
    navigate("/cart"); // Redirect to Cart page
  };

  return (
    <div className="customize-order">
      <h2>Customize Your {item.name}</h2>
      <form>
        <div>
          <label htmlFor="size">Size: </label>
          <select
            id="size"
            name="size"
            value={customization.size}
            onChange={handleCustomizationChange}
          >
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>

        <div>
          <label>Toppings: </label>
          <input
            type="checkbox"
            name="toppings"
            value="Olives"
            onChange={handleCustomizationChange}
          /> Olives
          <input
            type="checkbox"
            name="toppings"
            value="Mushrooms"
            onChange={handleCustomizationChange}
          /> Mushrooms
          <input
            type="checkbox"
            name="toppings"
            value="Pepperoni"
            onChange={handleCustomizationChange}
          /> Pepperoni
        </div>

        <div>
          <label>
            <input
              type="checkbox"
              name="extraCheese"
              checked={customization.extraCheese}
              onChange={handleCustomizationChange}
            /> Extra Cheese
          </label>
        </div>

        <button type="button" onClick={handleProceedToCart}>Proceed to Cart</button>
      </form>
    </div>
  );
};

export default CustomizeOrder;
