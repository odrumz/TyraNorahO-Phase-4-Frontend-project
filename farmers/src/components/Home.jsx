import React from 'react';
import Search from './Search';
import Filter from './Filter';
const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to The Farmers Market</h1>
          <p>Discover fresh, local products from your community</p>
        </div>
      </section>
      <section className="product-section">
        <div className="product-section-content">
          <h2>Explore Our Products</h2>
          <div className="search-filter">
            <Search />
            <Filter />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
