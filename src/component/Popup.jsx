import React from 'react';
import './Popup.css';

const Popup = ({ cart, onClose }) => {
  const calculateTotal = () => {
    return cart.reduce((total, product) => total + product.price * product.quantity, 0).toFixed(2);
  };

  const handleConfirmOrder = () => {
    // Implement order confirmation logic here
    alert('Order confirmed!');
    onClose();
  };

  return (
    <div className="popup">
      <div className="popup-content">
        <span className="popup-close" onClick={onClose}>&times;</span>
        <h2>Order Summary</h2>
        <div className="popup-body">
          <ul className="list-group">
            {cart.map((product) => (
              <li className="list-group-item" key={product.id}>
                <div className="row">
                  <div className="col-3">
                    <img src={product.images[0]} alt={product.title} className="img-thumbnail" />
                  </div>
                  <div className="col-9">
                    <h5>{product.title}</h5>
                    <p>Original Price: ${product.price.toFixed(2)}</p>
                    <p>Quantity: {product.quantity}</p>
                    <p>Total: ${(product.price * product.quantity).toFixed(2)}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="total-amount mt-4">
          <h3>Total Amount: ${calculateTotal()}</h3>
        </div>
        <div className="payment-options mt-4">
          <h3>Payment Options</h3>
          <div>
            <input type="radio" id="cod" name="payment" value="cod" />
            <label htmlFor="cod">Cash on Delivery</label>
          </div>
          <div>
            <input type="radio" id="online" name="payment" value="online" />
            <label htmlFor="online">Online Payment</label>
          </div>
        </div>
        <button className="btn btn-primary mt-4" onClick={handleConfirmOrder}>Confirm Order</button>
      </div>
    </div>
  );
};

export default Popup;
