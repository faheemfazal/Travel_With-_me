import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './screen/home';
import { Route,Routes } from 'react-router-dom';

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
