import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';

export default function Signup({ auth, setShowLogin, setRegistered }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

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

  return (
    <div className="container my-5">
      <h2 className="mb-4">Signup</h2>
      {error && <p className="text-danger">{error}</p>}
      <form onSubmit={handleSignup}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input 
            type="email" 
            className="form-control" 
            id="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required 
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input 
            type="password" 
            className="form-control" 
            id="password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required 
          />
        </div>
        <button type="submit" className="btn btn-primary">Signup</button>
      </form>
      <p className="mt-3">Already have an account? <button onClick={() => setShowLogin(true)} className="btn btn-link">Login</button></p>
    </div>
  );
}
