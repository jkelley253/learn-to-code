// learn-to-code/src/App.js

// imports
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Python from './pages/Python/Python';
import './styles/global.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/python/*" element={<Python />} /> 
      </Routes>
    </Router>
  );
}

export default App;