import React from 'react';
<<<<<<< HEAD
import logo from './logo.svg';
import { Routes, Route, Navigate } from "react-router-dom";
=======
>>>>>>> 31edbb2db185a6157be6144303da385c4a9ec77f
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
