import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/favourites">Favourites</Link></li>
        <li><Link to="/cart">Cart</Link></li>
        <li><Link to="/checkout">Checkout</Link></li>
        <li><Link to="/review">Review</Link></li>
        <li><Link to="/registration">Registration</Link></li>
        <li><Link to="/login">Login </Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
