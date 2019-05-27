import React from 'react';
import ReactDOM from 'react-dom';
import HomeLink from './HomeLink.js';
import './Soft.css';
import Snake from './snake.js';

class Soft extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bigTabClass: "bigTab isCurrent",
            challTabClass: "challTab notActive"
        };
    }

    render() {
        return (
            <div className="softPageWrapper">
                <span className="backgroundImg"></span>
                <HomeLink color="#DFDFDF" backCol="transparent"/>
                <h1 id="softSynop">
                    I am an academically trained Software Engineer.
                    <br />
                    I like to spend time every week developing larger projects,
                    and try to spend a day every week developing
                    challenge projects with a one day deadline.
                </h1>
                <div className="projectsWrapper">
                    <div className="tabsWrapper">
                        <div className={this.state.bigTabClass} onClick={this.renderBigProjs}>Large Projects</div>
                        <div className={this.state.challTabClass} onClick={this.renderChallProjs}>Challenge Projects</div>
                    </div>
                    <div id="projectList">
                        <BigList />
                    </div>
                </div>
            </div>
        )
    }

    renderBigProjs = () => {
        this.setState({
            bigTabClass: "bigTab isCurrent",
            challTabClass: "challTab notActive"
        });

        ReactDOM.render(<BigList />, document.getElementById('projectList'));
    }

    renderChallProjs = () => {
        this.setState({
            bigTabClass: "bigTab notActive",
            challTabClass: "challTab isCurrent"
        });

        ReactDOM.render(<ChallList />, document.getElementById('projectList'));
    }
}

class BigList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render(){
        return (
            <div className="projectWrapper">
                <div className="projectName">
                    SoftBear
                </div>
                <div className="projectItemWrapper">
                    <a href="https://github.com/DokKevin/softbear" target="_blank" rel="noopener noreferrer" className="projectItem github activeLink">GitHub</a>
                    <a href="https://www.softbear.dev" target="_blank" rel="noopener noreferrer" className="projectItem link activeLink">Link</a>
                    <div className="projectItem status inProgress">In Progress</div>
                    <div className="projectItem desc">Website for introducing myself and my projects. Developed with ReactJS.</div>
                </div>
                <div className="projBuffer">Buff</div>
            </div>
        );
    }
}

class ChallList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.name,
            status: this.props.status,
            github: this.props.github,
            gameContName: "gameInactive"
        }
    }

    render(){
        return (
            <div className="listWrapper">
                <div className="listItemWrapper">
                    <div className="projectName">
                        SoftSnake
                    </div>
                    <div className="projectItemWrapper">
                        <a href="https://github.com/DokKevin/SoftSnake" target="_blank" rel="noopener noreferrer" className="projectItem github activeLink">GitHub</a>
                        <div className="projectItem link activeLink" onClick={this.renderSnake}>Play</div>
                        <div className="projectItem status inProgress">~5 Hours</div>
                        <div className="projectItem desc">The challenge was to recreate snake. Due to time restrictions, the tail does not grow.</div>
                    </div>
                </div>
                <div id="gameContainer" className={this.state.gameContName}></div>
                <div className="projBuffer">Buff</div>
            </div>
        );
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

export default Soft;
