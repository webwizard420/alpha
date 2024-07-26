import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './component/Navbar';
import Home from './component/Home';
import Cart from './component/Cart';
import Login from './component/Login';
import Signup from './component/Signup';
import { auth } from './component/firebase';
import './App.css';

function App() {
  const [cart, setCart] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLogin, setShowLogin] = useState(true);
  const [registered, setRegistered] = useState(false);

  const addToCart = (product) => {
    const existingProduct = cart.find(item => item.id === product.id);
    if (existingProduct) {
      updateQuantity(product.id, existingProduct.quantity + 1);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      setCart(cart.filter(product => product.id !== productId));
    } else {
      setCart(cart.map(product => 
        product.id === productId ? { ...product, quantity: newQuantity } : product
      ));
    }
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(product => product.id !== productId));
  };

  const logout = () => {
    auth.signOut().then(() => {
      setIsLoggedIn(false);
      setShowLogin(true);
    }).catch(error => {
      console.error('Error logging out:', error);
    });
  };

  return (
    <Router>
      {isLoggedIn ? (
        <>
          <Navbar cartCount={cart.length} setSelectedCategory={setSelectedCategory} logout={logout} />
          <Routes>
            <Route path="/" element={<Home addToCart={addToCart} selectedCategory={selectedCategory} />} />
            <Route path="/cart" element={<Cart cart={cart} updateQuantity={updateQuantity} removeFromCart={removeFromCart} />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </>
      ) : (
        <>
          {showLogin ? (
            <Login auth={auth} setIsLoggedIn={setIsLoggedIn} setShowLogin={setShowLogin} registered={registered} />
          ) : (
            <Signup auth={auth} setShowLogin={setShowLogin} setRegistered={setRegistered} />
          )}
          <Routes>
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </>
      )}
    </Router>
  );
}

export default App;
