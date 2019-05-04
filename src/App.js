import React from 'react';
import './App.css';
import Uc from './Uc.js';
import HomeLink from './HomeLink.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <HomeLink color="#be315b"/>
          <Uc />
      </header>
    </div>
  );
}

export default App;
