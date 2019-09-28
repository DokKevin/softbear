import React from 'react';
import './Footer.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render(){
        return (
            <div className="footerWrapper">
                <div>Powered by <span>SoftBear.</span></div>
            </div>
        );
    }
}

export default Footer;
