import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import './Nav.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import InstagramLogo from "../images/Instagram_Icon.png";
import LinkedInLogo from "../images/linkedin_icon.png";
import EmailLogo from "../images/email.png";

class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dropArrowClass: "buttonOutline arrowAtTop",
            linkListClass: "listContainer listAtTop",
            atTop: 0
        };
    }

    render() {
        return (
            <div>
                <div className={this.state.dropArrowClass} onClick={this.toggleNav}>
                    <div className="upArrowOutter">
                        <div className="upArrowInner"></div>
                    </div>

                    <div className="downArrowOutter">
                        <div className="downArrowInner"></div>
                    </div>
                </div>

                <div className={this.state.linkListClass} onClick={this.toggleNav}>
                    <div className="linkWrapper">
                        <Link className="navLink" to="/" onClick={this.toggleNav}>Home</Link>
                        <Link className="navLink" to="/langs/" onClick={this.toggleNav}>Languages</Link>
                        <Link className="navLink" to="/soft/" onClick={this.toggleNav}>Software</Link>
                    </div>
                    <div className="socialMediaWrapper">
                        <a className="socialLink instagram" href="https://www.instagram.com/barbearic_duck/" target="_blank" rel="noopener noreferrer">
                            <img src={InstagramLogo} alt="Instagram" />
                        </a>
                        <a className="socialLink linkedIn" href="https://www.linkedin.com/in/kevin-kauffman-9a7bb3149/" target="_blank" rel="noopener noreferrer">
                            <img src={LinkedInLogo} alt="LinkedIn" />
                        </a>
                        <a className="socialLink email">
                            <img src={EmailLogo} alt="Email Me" />
                        </a>
                    </div>
                </div>
            </div>
        )
    }

    toggleNav = () => {
        if(this.state.atTop === 0){
            this.setState({
                dropArrowClass: "buttonOutline arrowAtBottom",
                linkListClass: "listContainer listAtBottom",
                atTop: 1
            });
        } else {
            this.setState({
                dropArrowClass: "buttonOutline arrowAtTop",
                linkListClass: "listContainer listAtTop",
                atTop: 0
            });
        }
    }

    renderHome(){
        ReactDOM.render(<App />, document.getElementById('root'));
    }
}

export default Nav;
