import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Cars from './components/Cars';
import CarDetails from './components/CarDetails';
import Footer from './components/Footer';
import './App.css';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="main-content">
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cars" element={<Cars />} />
          <Route path="/car/:id" element={<CarDetails />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;