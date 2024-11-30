// src/components/CartItem.js
import React from "react";

const CartItem = ({ item, onRemove }) => {
  return (
    <div className="cart-item">
      <h4>{item.name}</h4>
      <p>Quantity: {item.quantity}</p>
      <p>Price: Rs{item.price}</p>
      <button onClick={onRemove}>Remove</button>
    </div>
  );
};

export default CartItem;
