import React from 'react';
import './Popup.css'; // Make sure to include Popup styles

const Popup = ({ cart, onClose }) => {
  const totalAmount = cart.reduce((sum, product) => sum + product.price * product.quantity, 0);

  return (
    <div className="popup">
      <div className="popup-inner">
        <h3>Order Summary</h3>
        <div className="order-list">
          {cart.map((product) => (
            <div className="order-item" key={product.id}>
              <span>{product.title}</span>
              <span>${product.price} x {product.quantity}</span>
            </div>
          ))}
        </div>
        <h4>Total: ${totalAmount.toFixed(2)}</h4>
        <div className="payment-options">
          <label>
            <input type="radio" name="payment" value="cod" /> Cash on Delivery (COD)
          </label>
          <label>
            <input type="radio" name="payment" value="online" /> Online Payment
          </label>
        </div>
        <button className="close-popup" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Popup;
