import React, { useState, useEffect } from 'react';


const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
  
    fetch('http://127.0.0.1:5555/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  return (
    <div className="product-list">
      {products.map(product => (
        <div key={product.id} className="product-item">
          <img src={product.image} alt={product.name} />
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>${product.price}</p>
          <button>Add to Cart</button>
          <div className="search-filter">
          </div>
          
          
        </div>
      ))}
    </div>
  );
};

export default ProductList;




