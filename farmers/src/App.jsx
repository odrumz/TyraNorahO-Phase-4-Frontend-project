import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
// import Products from './components/Products';
// import Favourites from './components/Favourites';
// import Cart from './components/Cart';
// import Checkout from './components/Checkout';
// import Review from './components/Review';
import './App.css';
import Signup from './components/Signup';

import Login from './components/Login';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/products" element={<Products />} /> */}
        {/* <Route path="/favourites" element={<Favourites />} /> */}
        {/* <Route path="/cart" element={<Cart />} /> */}
        {/* <Route path="/checkout" element={<Checkout />} /> */}
        {/* <Route path="/review" element={<Review />} /> */}
        <Route path="/signup" element={<Signup />} />
        
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
