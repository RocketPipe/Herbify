import React from 'react';
import Header from './components/Header'; 
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';  // Import the Hero component

// Import your page components
import Home from './pages/Home'; 
import About from './pages/About';
import Login from './pages/Login'; 

function App() {
  return (
    <BrowserRouter> 
      <div className="App"> 
        <Header /> 
        <Routes> 
          <Route path="/" element={<Home />} /> 
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
