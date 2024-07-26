import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';

export default function Login({ auth, setIsLoggedIn, setShowLogin, registered }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setIsLoggedIn(true);
    } catch (error) {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="container my-5">
      <h2 className="mb-4">Login</h2>
      {registered && <p className="text-success">Registered successfully. Please login.</p>}
      {error && <p className="text-danger">{error}</p>}
      <form onSubmit={handleLogin}>
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
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
      <p className="mt-3">New user? <button onClick={() => setShowLogin(false)} className="btn btn-link">Register</button></p>
    </div>
  );
}
