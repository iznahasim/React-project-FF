import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import Register from "./Components/Register";
import LandingPage from "./Pages/LandingPage";
import Welcome from './Pages/Welcome';

import Footer from "./Components/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
        <Route path="/" element={<Welcome />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
         
            <Route path="/landingpage" element={<LandingPage />} />
      
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
