import React, { useState, useEffect } from 'react';

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Fetch cart items from backend API
    fetch('/api/cart')
      .then(response => response.json())
      .then(data => setCartItems(data));
  }, []);

  const handleRemoveItem = (id) => {
    // Remove item from cart via backend API
    fetch(`/api/cart/${id}`, {
      method: 'DELETE',
    })
      .then(() => {
        setCartItems(cartItems.filter(item => item.id !== id));
      });
  };

  return (
    <div className="shopping-cart">
      <h2>Your Cart</h2>
      {cartItems.map(item => (
        <div key={item.id} className="cart-item">
          <img src={item.image} alt={item.name} />
          <h2>{item.name}</h2>
          <p>${item.price}</p>
          <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default ShoppingCart;
