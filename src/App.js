import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import HomeLink from './HomeLink.js';
import Langs from './Langs.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <HomeLink color="#be315b"/>
          <div id="intro">
            <div class="buffer">Buffer</div>
            <h1>Hello there...</h1>
            <div class="buffer">Buffer</div>
            <h2>My name is Kevin.</h2>
            <div class="buffer">Buffer</div>
            <h3>I do these things:</h3>
          </div>
          <div class="homeLinkWrapper">
            <div href="" class="homeLink" onClick={renderLangs}>Learn Languages</div>
          </div>
          <div class="homeLinkWrapper">
            <div href="" class="homeLink">Develop Software</div>
          </div>
      </header>
    </div>
  );

  function renderLangs() {
      ReactDOM.render(<Langs />, document.getElementById('root'));
  }
}

export default App;
