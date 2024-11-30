// src/components/MenuItem.js
import React from "react";

const MenuItem = ({ item }) => {
  return (
    <div className="menu-item">
      <img src={item.image} alt={item.name} className="menu-item-image" />
      <h3>{item.name}</h3>
      <p>{item.description}</p>
      <p>Price: Rs{item.price}</p>
    </div>
  );
};

export default MenuItem;
