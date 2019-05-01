import React from 'react';
import './App.css';
import Uc from './Uc.js';
import HomeLink from './HomeLink.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <HomeLink color="#be315b"/>
          <div id="intro">
            <div class="buffer">Buffer</div>
            <h1>Hello there...</h1>
            <div class="buffer">Buffer</div>
            <h2>My name is<br />Kevin.</h2>
            <div class="buffer">Buffer</div>
            <h3>I do these things:</h3>
          </div>
          <div id="lang">
            <a href="">Learn Languages</a>
          </div>
          <div id="soft">
            <a href="">Develop Software</a>  
          </div>
      </header>
    </div>
  );
}

export default App;
