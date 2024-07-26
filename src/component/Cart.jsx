import React, { useState } from 'react';
import Popup from './Popup'; // Make sure to import the Popup component

export default function Cart({ cart, updateQuantity }) {
  const [showPopup, setShowPopup] = useState(false);

  const handleIncreaseQuantity = (productId) => {
    const product = cart.find(item => item.id === productId);
    if (product) {
      updateQuantity(productId, product.quantity + 1);
    }
  };

  const handleDecreaseQuantity = (productId) => {
    const product = cart.find(item => item.id === productId);
    if (product) {
      updateQuantity(productId, product.quantity - 1);
    }
  };

  const handleCheckout = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="container my-5">
      <h2>Cart</h2>
      {cart.length > 0 ? (
        <div className="row">
          {cart.map((product) => (
            <div className="col-md-3 mb-4" key={product.id}>
              <div className="card h-100 text-center p-4">
                <img src={product.images[0]} className="card-img-top" alt={product.title} height="250px" />
                <div className="card-body">
                  <h5 className="card-title mb-0">{product.title}</h5>
                  <p className="card-text lead fw-bold">${product.price}</p>
                  <div className="quantity-controls">
                    <button className="btn btn-outline-dark me-2" onClick={() => handleDecreaseQuantity(product.id)}>-</button>
                    <span>{product.quantity}</span>
                    <button className="btn btn-outline-dark ms-2" onClick={() => handleIncreaseQuantity(product.id)}>+</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="text-center mt-4">
            <button className="checkout-button" onClick={handleCheckout}>
              Checkout
            </button>
          </div>
        </div>
      ) : (
        <p>Your cart is empty</p>
      )}
      {showPopup && (
        <Popup cart={cart} onClose={handleClosePopup} />
      )}
    </div>
  );
}
