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

import Checkout from './components/Checkout';
import Favourite from './components/Favourite';
import Search from './components/Search';
import Filter from './components/Filter';
import About from './components/About';
import Review from './components/Review';
import ShoppingCart from './components/ShoppingCart';
import LoginForm from './components/LoginForm';
import RegistrationForm from './components/RegistrationForm';
import { register, login, isLoggedIn } from './authService';

import './App.css';
import ProductList from './components/Product';


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

          {/* Render LoginForm only if authService functions are available */}
          {isLoggedIn && <Route path="/login" element={<LoginForm login={login} />} />}
          {/* Render RegistrationForm only if authService functions are available */}
          {register && <Route path="/registration" element={<RegistrationForm register={register} />} />}
        </Routes>
      </div>

    </Router>
  );
};

export default App;