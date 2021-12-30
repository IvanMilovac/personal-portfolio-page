import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, About, Work, Technology, Contact } from "./index.js";
import Navbar from "./shared/Navbar.jsx";
import Footer from "./shared/Footer.jsx";

import "./App.scss";

const App = () => {
  return (
    <div className="app-container">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Work />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
