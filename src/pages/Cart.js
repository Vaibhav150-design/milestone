// src/pages/Cart.js
import React, { useContext } from "react";
import { CartContext } from "../CartContext";
import CartItem from "../components/CartItem";

const Cart = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);

  const totalPrice = cartItems.reduce((acc, item) => acc + item.quantity * item.price, 0);

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cartItems.length > 0 ? (
        <div>
          <div className="cart-items">
            {cartItems.map((item) => (
              <CartItem key={item.id} item={item} onRemove={() => removeFromCart(item.id)} />
            ))}
          </div>
          <div className="total">
            <p>Total: Rs{totalPrice.toFixed(2)}</p>
            <button>Checkout</button>
          </div>
        </div>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
};

export default Cart;
