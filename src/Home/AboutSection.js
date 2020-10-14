import React from 'react';
import './AboutSection.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import AboutImg from "../images/about.jpg";

class AboutSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render(){
        return (
            <div className="sectionWrapper" id="aboutTop">
                <div className="sectionContentWrapper">
                    <div className="blurb">
                        <h1>Who am<span className="aboutAccent"> I?</span></h1>
                        <p>
                            I am a software engineer living in <span className="accented">Cary</span>, NC. I
                            like to eat, play, and work, but not at the same
                            time. I like to do things like <span className="accented">program</span>, learn
                            foreign <span className="accented">languages</span>, and play <span className="accented">Video Games</span> in
                            my free time. Scroll down to see more details about
                            what I get up to.
                        </p>
                    </div>
                    <img className="aboutImg" src={AboutImg} alt="Kevin in Front of Cherry Blossoms" />
                </div>
            </div>
        );
    }
}

export default AboutSection;
