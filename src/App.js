import React from 'react';
import './App.css';
import Home from './Home.js';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Langs from './Langs.js';
import Soft from './Soft.js';

function App() {
  return (
      <Router>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/langs" component={Langs} />
            <Route path="/soft" component={Soft} />
        </Switch>
      </Router>
  );
}

export default App;
