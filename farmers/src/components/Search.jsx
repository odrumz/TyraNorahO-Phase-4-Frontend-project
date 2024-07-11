import React, { useState } from 'react';


const Search = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = () => {
    // Perform search with backend API
    fetch(`/api/search?q=${query}`)
      .then(response => response.json())
      .then(data => setResults(data));
  };

  return (
    <div className="search">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search products..."
      />
      <button onClick={handleSearch}>Search</button>
      <div className="search-results">
        {results.map(result => (
          <div key={result.id} className="product-item">
            <img src={result.image} alt={result.name} />
            <h2>{result.name}</h2>
            <p>${result.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
