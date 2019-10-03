import React from 'react';
import './App.css';
import Home from './Home/Home.js';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Soft from './Software/SoftT2.js';
import Nav from './Nav/Nav.js';
import RecipesHome from './Recipes/RecipesHome.js';

function App() {
  return (
      <Router>
        <Nav />
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/soft" component={Soft} />
            <Route path="/recipes" component={RecipesHome} />
        </Switch>
      </Router>
  );
}

export default App;
