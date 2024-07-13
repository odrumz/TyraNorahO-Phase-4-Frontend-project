import React, { useState, useEffect } from 'react';


const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from backend API
    fetch('/api/products')
      .then(response  => response.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div className="product-list">
      {products.map( product => (
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
