import React from 'react';
import ReactDOM from 'react-dom';
import './SoftT2.css';
import Snake from '../snake.js';
import BearHead from '../images/bearHead.png';
import SnakeImg from '../images/snake.png';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class SoftT2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            gameContName: "gameInactive"
        };
    }

    render() {
        return (
            <div className="softPageWrapper">
                <div className="projsBlurb">
                    <span>
                        Stuff I made <span className="projAccented">:</span>
                    </span>
                </div>

                <div className="projectsWrapper">
                    <ProjectItem_Link
                        image={BearHead} imgAlt="SoftBear Website"
                        name="SoftBear" desc="My personal website that I use to introduce myself and the things I like to do. You're there now! Feel free to stay as long as you like and to check out the source code."
                        productURL="https://www.softbear.dev" sourceCodeURL="https://github.com/DokKevin/softbear"
                        progressCol="inProgress" progress="In Progress" language="ReactJS"
                    />

                    <ProjectItem_Button
                        image={SnakeImg} imgAlt="Snake"
                        name="SoftSnake" desc="My attempt at creating the classic game snake in JavaScript and the ReactJS Framework. Please play it and enjoy! This was just a challenge I gave to myself for a little practice."
                        buttonAction={this.renderSnake} sourceCodeURL="https://github.com/DokKevin/SoftSnake"
                        progressCol="finished" progress="Finished" language="ReactJS"
                    />
                </div>

                <div id="gameContainer" className={this.state.gameContName}></div>
            </div>
        )
    }

    dismissGame = () => {
        this.setState({
            gameContName: "gameInactive"
        });
        ReactDOM.unmountComponentAtNode(document.getElementById('gameContainer'));
    }

    renderSnake = () => {
        this.setState({
            gameContName: "gameActive"
        });
        ReactDOM.render(<Snake dismissGame={this.dismissGame} />, document.getElementById('gameContainer'));
    }
}

class ProjectItem_Link extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render(){
        return (
            <div className="projItemWrapper">
                <img className="projImg" src={this.props.image} alt={this.props.imgAlt} />
                <div className="projName">{this.props.name}</div>
                <div className="bufferLine"></div>
                <div className="projDescription">{this.props.desc}</div>
                <div className="projLinksWrapper">
                    <span className="plwColumn">
                        <a href={this.props.productURL} target="_blank" rel="noopener noreferrer">Product</a>
                        <a href={this.props.sourceCodeURL} target="_blank" rel="noopener noreferrer">Source Code</a>
                    </span>
                    <span className="plwColumn">
                        <div>Status: <span className={this.props.progressCol}>{this.props.progress}</span></div>
                        <div>Language: {this.props.language}</div>
                    </span>
                </div>
            </div>
        );
    }
}

class ProjectItem_Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render(){
        return (
            <div className="projItemWrapper">
                <img className="projImg" src={this.props.image} alt={this.props.imgAlt} />
                <div className="projName">{this.props.name}</div>
                <div className="bufferLine"></div>
                <div className="projDescription">{this.props.desc}</div>
                <div className="projLinksWrapper">
                    <span className="plwColumn">
                        <div className="projItemButton" onClick={this.props.buttonAction}>Product</div>
                        <a href={this.props.sourceCodeURL} target="_blank" rel="noopener noreferrer">Source Code</a>
                    </span>
                    <span className="plwColumn">
                        <div>Status: <span className={this.props.progressCol}>{this.props.progress}</span></div>
                        <div>Language: {this.props.language}</div>
                    </span>
                </div>
            </div>
        );
    }
}

export default SoftT2;
