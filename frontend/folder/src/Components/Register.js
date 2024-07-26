import React, { useState } from "react";
import './Register.css';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import Footer from './Footer'; 

const Register = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    username: " ",
    email: "",
    password: "",
    dateOfBirth: "",
    country: "",
    phoneNumber: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if all fields are filled
    if (!input.username || !input.email || !input.password || !input.dateOfBirth || !input.country || !input.phoneNumber) {
      alert("All fields are required!");
      return;
    }

    let data = JSON.stringify({
      username: input.username,
      email: input.email,
      password: input.password,
      phoneNumber: input.phoneNumber 
    });

    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'http://localhost:8082/api/v1/auth/register', 
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      data: data
    };

    axios.request(config)
      .then((response) => {
        console.log(response.data); 
        navigate("/login");
      })
      .catch((error) => {
        console.error(error);
        alert("Registration failed. Please try again."); 
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
  };

  return (
    <div className="main">
      <h2>Sign Up Here</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          value={input.username}
          onChange={handleChange}
          placeholder="Enter Username"
        />
        <input
          type="email"
          name="email"
          value={input.email}
          onChange={handleChange}
          placeholder="Enter Email"
        />
        <input
          type="password"
          name="password"
          value={input.password}
          onChange={handleChange}
          placeholder="Enter Password"
        />
        <input
          type="date"
          name="dateOfBirth"
          value={input.dateOfBirth}
          onChange={handleChange}
          placeholder="Enter Date of Birth"
        />
        <input
          type="text"
          name="country"
          value={input.country}
          onChange={handleChange}
          placeholder="Enter Country/Region"
        />
        <input
          type="text"
          name="phoneNumber"
          value={input.phoneNumber}
          onChange={handleChange}
          placeholder="Enter Phone Number"
        />

        <button type="submit" className="btn-register">
          Register
        </button>

        <p className="text-center text-muted mt-5 mb-0">
          Have an account?
          <a href="/login" className="fw-bold text-body">
            Login here
          </a>
        </p>
      </form>
      <Footer />
    </div>
  );
};

export default Register;
