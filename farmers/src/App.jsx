import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Checkout from './components/Checkout';
import Favourite from './components/Favourite';
import Search from './components/Search';
import Filter from './components/Filter';
import About from './components/About';
import Review from './components/Review';
import ShoppingCart from './components/ShoppingCart';


import './App.css';
import ProductList from './components/Product';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/favourites" element={<Favourite />} />
          <Route path="/search" element={<Search />} />
          <Route path="/filter" element={<Filter />} />
          <Route path="/about" element={<About />} />
          <Route path="/reviews" element={<Review />} />
          <Route path="/cart" element={<ShoppingCart />} />
          <Route path="/products" element={<ProductList/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;