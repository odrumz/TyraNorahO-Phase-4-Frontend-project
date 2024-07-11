import React, { useState } from 'react';


const Filter = () => {
  const [category, setCategory] = useState('');
  const [priceRange, setPriceRange] = useState('');

  const handleFilter = () => {
    // Perform filtering with backend API
    fetch(`/api/products?category=${category}&priceRange=${priceRange}`)
      .then(response => response.json())
      .then(data => {
        // Handle filtered data
      });
  };

  return (
    <div className="filter">
      <h2>Filter Products</h2>
      <div>
        <label>Category</label>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">All</option>
          <option value="fruits">Fruits</option>
          <option value="vegetables">Vegetables</option>
          <option value="dairy">Dairy</option>
        </select>
      </div>
      <div>
        <label>Price Range</label>
        <select value={priceRange} onChange={(e) => setPriceRange(e.target.value)}>
          <option value="">All</option>
          <option value="0-10">$0 - $10</option>
          <option value="10-20">$10 - $20</option>
          <option value="20-30">$20 - $30</option>
        </select>
      </div>
      <button onClick={handleFilter}>Apply Filters</button>
    </div>
  );
};

export default Filter;
