import React, { useState, useEffect } from 'react';


const Favourite = () => {
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    // Fetch favourite products from backend API
    fetch('/api/favourites')
      .then(response => response.json())
      .then(data => setFavourites(data));
  }, []);

  return (
    <div className="favourite">
      <h2>Favourite Products</h2>
      {favourites.map(product => (
        <div key={product.id} className="product-item">
          <img src={product.image} alt={product.name} />
          <h2>{product.name}</h2>
          <p>${product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Favourite;
