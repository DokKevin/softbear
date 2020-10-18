import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import './Nav.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import InstagramLogo from "../images/Instagram_Icon.png";
import LinkedInLogo from "../images/linkedin_icon.png";
import EmailLogo from "../images/email.png";
import GitHubLogo from "../images/github-icon.png";

class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dropArrowClass: "buttonOutline",
            linkListClass: "listContainer",
            atTop: 0
        };
    }

    render() {
        return (
            <div>
                <div className={this.state.dropArrowClass} onClick={this.toggleNav}>
                    <div class="bar1"></div>
                    <div class="bar2"></div>
                    <div class="bar3"></div>
                </div>

                <div className={this.state.linkListClass} onClick={this.toggleNav}>
                    <div className="navWrapper">
                        <div className="subDomainLinksWrapper">
                            <Link className="navLink subDomLink" to="https://beta.softbear.dev" onClick={this.toggleNav}>Beta Site</Link>
                            <Link className="navLink subDomLink" to="https://recipes.softbear.dev" onClick={this.toggleNav}>Recipe Site</Link>
                        </div>
                        <div className="mainLinksWrapper">
                            <div>
                                <Link className="navLink mainLink" to="/" onClick={this.toTop}>Home</Link>
                                <Link className="navLink mainLink" onClick={this.toAbout}>About Me</Link>
                                <Link className="navLink mainLink" onClick={this.toSoft}>Software</Link>
                                <Link className="subLink" to="/soft/" onClick={this.toggleNav}> - Projects</Link>
                                <Link className="navLink mainLink" onClick={this.toLangs}>Languages</Link>
                            </div>
                        </div>
                        <div className="socialMediaWrapper">
                            <a className="socialLink instagram" href="https://www.instagram.com/anchovy_pizza/" target="_blank" rel="noopener noreferrer">
                                <img src={InstagramLogo} alt="Instagram" />
                            </a>
                            <a className="socialLink linkedIn" href="https://www.linkedin.com/in/kevin-kauffman-9a7bb3149/" target="_blank" rel="noopener noreferrer">
                                <img src={LinkedInLogo} alt="LinkedIn" />
                            </a>
                            <a className="socialLink gitHub" href="https://github.com/DokKevin" target="_blank" rel="noopener noreferrer">
                                <img src={GitHubLogo} alt="GitHub" />
                            </a>
                            <a className="socialLink email">
                                <img src={EmailLogo} alt="Email Me" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    toTop = () => {
        let element = document.getElementById("top");
        element.scrollIntoView({behavior: "smooth", block: "start"});

        this.toggleNav();
    };

    toLangs = () => {
        let element = document.getElementById("langTop");
        element.scrollIntoView({behavior: "smooth", block: "start"});

        this.toggleNav();
    };

    toSoft = () => {
        let element = document.getElementById("softTop");
        element.scrollIntoView({behavior: "smooth", block: "start"});

        this.toggleNav();
    };

    toAbout = () => {
        let element = document.getElementById("aboutTop");
        element.scrollIntoView({behavior: "smooth", block: "start"});

        this.toggleNav();
    };

    toggleNav = () => {
        if(this.state.atTop === 0){
            this.setState({
                dropArrowClass: "buttonOutline change",
                linkListClass: "listContainer listOpen",
                atTop: 1
            });
        } else {
            this.setState({
                dropArrowClass: "buttonOutline",
                linkListClass: "listContainer",
                atTop: 0
            });
        }
    }

    renderHome(){
        ReactDOM.render(<App />, document.getElementById('root'));
    }
}

export default Nav;
