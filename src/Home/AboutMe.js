import React from 'react';
import './AboutMe.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ScrollWheel from "../images/scroll.png";

class AboutMe extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render(){
        return (
            <div className="aboutWrapper">
                <div className="aboutPic"></div>
                <div className="aboutContWrapper">
                    <span className="aboutContent">
                        <h1 className="hello">Hello.</h1>
                        <h2>My name is <span className="name">Kevin.</span></h2>
                        <h3>And that's my <span>beautiful</span> girlfriend.</h3>
                        <h3><span className="contactButton">Contact Me</span></h3>
                    </span>
                    <span className="scrollImg">
                        <img src={ScrollWheel} alt="Scroll Down" />
                    </span>
                </div>
            </div>
        );
    }
}

export default AboutMe;
