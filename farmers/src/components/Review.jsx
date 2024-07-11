import React, { useState, useEffect } from 'react';


const Review = ({ productId }) => {
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState('');

  useEffect(() => {
    // Fetch reviews for the product
    fetch(`/api/products/${productId}/reviews`)
      .then(response => response.json())
      .then(data => setReviews(data));
  }, [productId]);

  const handleAddReview = () => {
    // Post new review to backend API
    fetch(`/api/products/${productId}/reviews`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ review: newReview }),
    })
      .then(response => response.json())
      .then(data => {
        setReviews([...reviews, data]);
        setNewReview('');
      });
  };

  return (
    <div className="review">
      <h2>Product Reviews</h2>
      {reviews.map(review => (
        <div key={review.id} className="review-item">
          <p>{review.text}</p>
        </div>
      ))}
      <textarea
        value={newReview}
        onChange={(e) => setNewReview(e.target.value)}
        placeholder="Write a review..."
      ></textarea>
      <button onClick={handleAddReview}>Add Review</button>
    </div>
  );
};

export default Review;
