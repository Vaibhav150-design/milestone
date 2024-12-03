import React, { useState } from "react";
import { useParams } from "react-router-dom";

const OrderCustomization = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [toppings, setToppings] = useState([]);

  const handleToppingChange = (event) => {
    const value = event.target.value;
    setToppings(prev => prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value]);
  };

  return (
    <div className="order-customization">
      <h2>Customize Your Order</h2>
      <h3>Item {id}</h3>
      <label>
        Quantity:
        <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} min="1" />
      </label>
      <div>
        <h4>Choose Toppings:</h4>
        <label>
          <input type="checkbox" value="Cheese" onChange={handleToppingChange} /> Cheese
        </label>
        <label>
          <input type="checkbox" value="Bacon" onChange={handleToppingChange} /> Bacon
        </label>
      </div>
      <button>Proceed to Cart</button>
    </div>
  );
};

export default OrderCustomization;
