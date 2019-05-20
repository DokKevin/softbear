import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Home from './Home.js';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Langs from './Langs.js';
import Soft from './Soft.js';

function App() {
  return (
      <Router>
            <Route path="/" exact component={Home} />
            <Route path="/langs/" component={Langs} />
            <Route path="/soft/" component={Soft} />
      </Router>
  );
}

export default App;
