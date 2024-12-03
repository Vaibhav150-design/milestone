import React, { useContext } from "react";
import { CartContext } from "../CartContext";
import MenuItem from "../components/MenuItem";
import "./Menu.css";

import pizza from "../assets/pizza.jpg";
import burger from "../assets/burger.jpg";
import pasta from "../assets/pasta.jpg";
import sandwich from "../assets/sandwich.jpeg";
import salad from "../assets/salad.jpg";
import fries from "../assets/fries.jpeg";
import sushi from "../assets/sushi.jpg";
import tacos from "../assets/tacos.jpeg";

const Menu = () => {
  const { addToCart } = useContext(CartContext);

  const menuItems = [
    { id: 1, name: "Pizza", description: "Cheese pizza with toppings", price: 100, image: pizza },
    { id: 2, name: "Burger", description: "Juicy beef burger", price: 70, image: burger },
    { id: 3, name: "Pasta", description: "Spaghetti with sauce", price: 120, image: pasta },
    { id: 4, name: "Sandwich", description: "Grilled chicken sandwich", price: 80, image: sandwich },
    { id: 5, name: "Salad", description: "Fresh mixed greens with dressing", price: 60, image: salad },
    { id: 6, name: "Fries", description: "Crispy golden fries", price: 40, image: fries },
    { id: 7, name: "Sushi", description: "Fresh and tasty sushi rolls", price: 150, image: sushi },
    { id: 8, name: "Tacos", description: "Delicious beef tacos", price: 90, image: tacos },
  ];

  return (
    <div className="menu">
      <h2>Our Menu</h2>
      <div className="menu-list">
        {menuItems.map((item) => (
          <div key={item.id}>
            <MenuItem item={item} />
            <button onClick={() => addToCart(item)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
