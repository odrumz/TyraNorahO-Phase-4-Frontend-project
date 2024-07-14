import React, { useState, useEffect } from 'react';
import Search from './Search';
import Filter from './Filter';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterCriteria, setFilterCriteria] = useState({});

  useEffect(() => {
    // Fetch products from backend API
    fetch('http://127.0.0.1:5555/products')
      .then(response => response.json())
      .then(data => setProducts(data));
  }, []);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handleFilter = (criteria) => {
    setFilterCriteria(criteria);
  };

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = Object.keys(filterCriteria).every(key => 
      filterCriteria[key] ? product[key] === filterCriteria[key] : true
    );
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="product-list">
      <div className='search-filter'>
      <Search onSearch={handleSearch} />
      <Filter onFilter={handleFilter} />
      </div>
      {filteredProducts.map(product => (
        <div key={product.id} className="product-item">
          <img src={product.image} alt={product.name} />
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>${product.price}</p>
          <button>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;




