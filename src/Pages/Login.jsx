import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { database } from '../data/database';
import "./Login.css"; 

export default function LoginPage() {

  //user infos
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  //error
  const [error, setError] = useState('');

  //navigation
  const navigate = useNavigate();

  //login logic
  const handleLogin = (e) => {

    e.preventDefault();

    const user = database.users.find( (u) => u.email === email && u.password === password)

    if (user) {

      localStorage.setItem("CurrentUserId", user.id);
      navigate('/app/dashboard');

    } else {
      
      setError('Invalid email or password');
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-welcome-title">Welcome back!</h2>
        <p className="login-welcome-subtitle">Log in to continue your study journey</p>

        {error && <p style={{ color: '#ef4444', fontSize: '12px' }}>{error}</p>}

        <form className="login-form" onSubmit={handleLogin}>
          <div className="input-group">
            <label className="input-label">Email</label>
            <input 
              className="login-input"
              type="email" 
              placeholder="you@example.com" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label className="input-label">Password</label>
            <input 
              className="login-input"
              type="password" 
              placeholder="••••••••" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <a href="#" className="forgot-pass">Forgot password?</a>
          </div>

          <button type="submit" className="login-button">Log In</button>
        </form>

        <div className="divider">
          <span className="divider-text">or continue with</span>
        </div>

        <div className="social-container">
          <button className="social-btn">Google</button>
          <button className="social-btn">GitHub</button>
        </div>

        <p className="signup-text">
          Don't have an account? <a href="#" className="signup-link">Sign up</a>
        </p>
      </div>
    </div>
  );
}