import React from 'react';

const Orders = ({ orders }) => {
  return (
    <div>
      <h2>Order History</h2>
      {orders.length === 0 ? (
        <p>No orders have been made yet</p>
      ) : (
        <ul>
          {orders.map((product, index) => (
            <li key={index}>
              <span>{product.name}</span>
              <span>Quantity: {product.quantity}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Orders;
