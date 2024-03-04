//App.js 
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import NutritionMeter from "./components/NutritionMeter";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/nutrition-meter" element={<NutritionMeter />} />
      </Routes>
    </Router>
  );
}

export default App; 