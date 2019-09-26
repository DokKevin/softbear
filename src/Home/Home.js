import React from 'react';
import './Home.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import AboutMe from "./AboutMe.js";

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render(){
        return (
            <div className="App">
                <AboutMe />
            </div>
        );
    }
}

export default Home;
