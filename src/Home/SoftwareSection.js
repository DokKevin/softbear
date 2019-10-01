import React from 'react';
import './SoftwareSection.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class SoftwareSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render(){
        return (
            <div className="softwareSectionWrapper" id="softTop">
                <div className="softTitle">
                    <p>I like to</p>
                    <p className="softAccent">Program Things.</p>
                </div>
                <div className="picWrapper">
                    <a className="websitePic" href="https://www.softbear.dev" target="_blank" rel="noopener noreferrer"></a>
                    <a className="codePic" href="https://github.com/DokKevin/softbear/tree/master/src" target="_blank" rel="noopener noreferrer"></a>
                    <a className="gitPic" href="https://github.com/DokKevin" target="_blank" rel="noopener noreferrer"></a>
                </div>
                <Link className="projectButt" to="/soft/">Projects</Link>
            </div>
        );
    }
}

export default SoftwareSection;
