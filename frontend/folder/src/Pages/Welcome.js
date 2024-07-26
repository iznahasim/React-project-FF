
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Welcome.css'; 

const Welcome = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };

  return (
    <div className="welcome-container">
      <h1>Welcome to Pet Charm</h1>
      <p>Please login to continue</p>
      <button className="btn-login" onClick={handleLoginClick}>
        Login
      </button>
    </div>
  );
};

export default Welcome;
