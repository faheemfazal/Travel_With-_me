import React from 'react';

import logo from './logo.svg';
import { Routes, Route, Navigate } from "react-router-dom";

import './App.css';
import Home from './screen/home';

function App() {
  return (
    <div className="App">
    
    <Routes>
  
  <Route path="/" element={<Home />} />
  
 </Routes>
      
    </div>
  );
}

export default App;
