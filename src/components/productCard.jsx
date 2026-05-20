import React from 'react';
import './ProductCard.css'; // Assuming your CSS file is named this

export default function ProductCard({ src, name, price }) {
  // Destructuring props directly in the arguments makes the code much more readable
  
  return (
    <div className="product-card">
      <div className="product-image-wrapper">
        <img src={src} alt={name} className="product-image" />
      </div>
      
        <div className="product-info">
        <h1 className="product-name">{name}</h1>
        <h3 className="product-price">${price}</h3>
        
        <button className="buy-button">Buy Now</button>
      </div>
    </div>
  );
}