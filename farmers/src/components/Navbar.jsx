import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import authService from './authService';

const Navbar = () => {
  const navigate = useNavigate();
  const isAuthenticated = authService.getAccessToken() !== null;

  const handleLogout = () => {
    authService.logout();
    navigate('/login');
  };

  return (
    <nav className='navbar'>
      <ul className='navbar-container'>
        <li>
          <Link to="/" className='navbar-link'>Home</Link>
        </li>
        <li>
          <Link to="/products" className='navbar-link'>Products</Link>
        </li>
        <li>
          <Link to="/favourites" className='navbar-link'>Favourites</Link>
        </li>
        <li>
          <Link to="/cart" className='navbar-link'>Cart</Link>
        </li>
        <li>
          <Link to="/checkout" className='navbar-link'>Checkout</Link>
        </li>
        <li>
          <Link to="/reviews" className='navbar-link'>Reviews</Link>
        </li>
        {!isAuthenticated ? (
          <>
            <li>
              <Link to="/login" className='navbar-link'>Login</Link>
            </li>
            <li>
              <Link to="/signup" className='navbar-link'>Signup</Link>
            </li>
          </>
        ) : (
          <li>
            <button className='navbar-link' onClick={handleLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
