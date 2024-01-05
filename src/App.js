import React from 'react';
import logo from './logo.svg';
import './App.css';
import Calculator from './components/calculator/Calculator'; // Import component Calculator

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* Sử dụng component Calculator */}
        <Calculator />
       
      </header>
    </div>
  );
}

export default App;
