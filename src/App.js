import React from 'react';
import logo from './logo.svg';
import './App.css';
import Timer from './Timer';

function App() {
  return (
    <div className="App">
      <div className="app-container">
        <Timer />
        <img src={logo} className="App-logo" alt="logo" />
      </div>
    </div>
  );
}

export default App;
