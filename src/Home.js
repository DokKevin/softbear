import React from 'react';
import './Home.css';
import HomeLink from './HomeLink.js';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bigColor: "#F5F5F5",
            bigBackColor: "#37C0FF",
            challColor: "#909090",
            challBackColor: "#F5F5F5"
        }
    }

    render(){
            return (
              <div className="App">
                <header className="App-header">
                    <HomeLink color="white" backCol="#be315b"/>
                    <div id="intro">
                      <div className="buffer">Buffer</div>
                      <h1>Hello there...</h1>
                      <div className="buffer">Buffer</div>
                      <h2>My name is Kevin.</h2>
                      <div className="buffer">Buffer</div>
                      <h3>I do these things:</h3>
                    </div>
                    <div className="homeLinkWrapper">
                        <Link className="homeLink" to="/langs/">Learn Languages</Link>
                    </div>
                    <div className="homeLinkWrapper">
                        <Link className="homeLink" to="/soft/">Develop Software</Link>
                    </div>
                </header>
              </div>
          );
    }
}

export default Home;
