import React from 'react';
import './ProductPopup.css';

const ProductPopup = ({ product, onClose }) => {
  return (
    <div className={`product-popup ${product ? 'visible' : ''}`}>
      <div className="product-popup-content">
        <span className="product-popup-close" onClick={onClose}>&times;</span>
        <img src={product.images[0]} alt={product.title} />
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <p className="lead fw-bold">${product.price}</p>
      </div>
    </div>
  );
};

export default ProductPopup;
