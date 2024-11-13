import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { motion } from 'framer-motion';

export default function Signup({ auth, setShowLogin, setRegistered }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setRegistered(true);
      setShowLogin(true);
    } catch (error) {
      setError('Error signing up. Please try again.');
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, x: '-100vw' },
    visible: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 50 } },
    exit: { opacity: 0, x: '100vw', transition: { ease: 'easeInOut' } }
  };

  const animatedBackgroundStyle = {
    animation: 'backgroundAnimation 15s infinite',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const signupContainerStyle = {
    background: 'linear-gradient(135deg, rgba(255, 127, 0, 0.9), rgba(255, 0, 150, 0.9))',
    padding: '40px',
    borderRadius: '15px',
    width: '100%',
    maxWidth: '400px',
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4)',
    position: 'relative',
    overflow: 'hidden',
  };

  const inputGroupStyle = {
    position: 'relative',
    marginBottom: '20px',
  };

  const inputStyle = {
    border: 'none',
    borderRadius: '5px',
    padding: '15px',
    fontSize: '16px',
    transition: 'border-color 0.3s ease',
    width: '100%',
    background: '#fff',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
  };

  const floatingLabelStyle = (isFocused, hasValue) => ({
    position: 'absolute',
    left: '15px',
    top: isFocused || hasValue ? '0px' : '15px',
    fontSize: isFocused || hasValue ? '12px' : '16px',
    color: isFocused || hasValue ? '#6f42c1' : '#666',
    transition: '0.2s ease all',
    pointerEvents: 'none',
  });

  const buttonStyle = {
    width: '100%',
    backgroundColor: '#6f42c1',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    padding: '15px',
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease, transform 0.2s ease',
    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.2)',
  };

  const buttonHoverStyle = {
    backgroundColor: '#5a32a5',
    transform: 'scale(1.05)',
  };

  return (
    <motion.div 
      style={animatedBackgroundStyle}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div style={signupContainerStyle}>
        <h2 className="mb-4" style={{ color: '#fff', textAlign: 'center' }}>Signup</h2>
        {error && <p className="text-danger">{error}</p>}
        <form onSubmit={handleSignup}>
          <div style={inputGroupStyle}>
            <input 
              type="email" 
              style={inputStyle} 
              placeholder=" " 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onFocus={() => setEmailFocused(true)}
              onBlur={() => setEmailFocused(false)}
              required 
            />
            <label style={floatingLabelStyle(emailFocused, email)}>Email</label>
          </div>
          <div style={inputGroupStyle}>
            <input 
              type="password" 
              style={inputStyle} 
              placeholder=" " 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onFocus={() => setPasswordFocused(true)}
              onBlur={() => setPasswordFocused(false)}
              required 
            />
            <label style={floatingLabelStyle(passwordFocused, password)}>Password</label>
          </div>
          <button 
            style={buttonStyle} 
            type="submit" 
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor)} 
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#6f42c1')}
          >
            Signup
          </button>
        </form>
        <p className="mt-3" style={{ color: '#fff', textAlign: 'center' }}>
          Already have an account? 
          <button onClick={() => setShowLogin(true)} className="btn btn-link" style={{ color: '#ffdd57' }}>Login</button>
        </p>
      </div>
    </motion.div>
  );
}
