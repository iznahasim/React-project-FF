import React, { useState } from 'react';
import { useNavigate, Link } from "react-router-dom";
import axios from 'axios';
import './Login.css';
import Footer from './Footer'; 

const Login = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let data = JSON.stringify({
      email: input.email,
      password: input.password
    });

    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'http://localhost:8082/api/v1/auth/login',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      data: data
    };

    axios.request(config)
      .then((response) => {
        console.log(response.data);
        localStorage.setItem("user", JSON.stringify(response.data.user));
        localStorage.setItem("token", response.data.token);
        navigate('/landingpage');  
      })
      .catch((error) => {
        console.log(error);
        alert("Login failed. Please try again.");
      });
  };

  return (
    <div className="main">
      <div className="form">
        <h2>Login Here</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            value={input.email}
            onChange={handleChange}
            placeholder="Enter Email Here"
          />
          <input
            type="password"
            name="password"
            value={input.password}
            onChange={handleChange}
            placeholder="Enter Password Here"
          />
          <button type="submit" className="btn">Login</button>
          <p className="link">
            Don't have an account?<br />
            <Link to="/register">Sign up Here</Link>
          </p>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
