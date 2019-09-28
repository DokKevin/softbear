import React from 'react';
import './App.css';
import Home from './Home/Home.js';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Soft from './Soft.js';
import Nav from './Nav/Nav.js';

function App() {
  return (
      <Router>
        <Nav />
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/soft" component={Soft} />
        </Switch>
      </Router>
  );
}

export default App;
