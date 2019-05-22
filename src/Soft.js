import React from 'react';
import ReactDOM from 'react-dom';
import HomeLink from './HomeLink.js';
import './Soft.css';

class Soft extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bigTabClass: "bigTab isCurrent",
            challTabClass: "challTab notActive",
        };
    }

    render() {
        return (
            <div class="softPageWrapper">
                <span class="backgroundImg"></span>
                <HomeLink color="#DFDFDF" backCol="transparent"/>
                <h1 id="softSynop">
                    I am an academically trained Software Engineer.
                    <br />
                    I like to spend time every week developing larger projects,
                    and plan to start spending a day every week developing
                    challenge projects with a one day deadline.
                </h1>
                <div class="projectsWrapper">
                    <div class="tabsWrapper">
                        <div class={this.state.bigTabClass} onClick={this.renderBigProjs}>Large Projects</div>
                        <div class={this.state.challTabClass} onClick={this.renderChallProjs}>Challenge Projects</div>
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
            <div class="projectWrapper">
                <div class="projectName">
                    SoftBear
                </div>
                <div class="projectItemWrapper">
                    <a href="https://github.com/DokKevin/softbear" target="_blank" rel="noopener noreferrer" class="projectItem github activeLink">GitHub</a>
                    <a href="https://www.softbear.dev" target="_blank" rel="noopener noreferrer" class="projectItem link activeLink">Link</a>
                    <div class="projectItem status inProgress">In Progress</div>
                    <div class="projectItem desc">Website for introducing myself and my projects. Developed with ReactJS.</div>
                </div>
                <div class="projBuffer">Buff</div>
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
            github: this.props.github
        }
    }

    render(){
        return (
            <div class="listWrapper">
                <div class="listItemWrapper">
                    <div class="projectName">
                        None
                    </div>
                    <div class="projectItemWrapper">
                        <a class="projectItem github">No GitHub</a>
                        <a class="projectItem link">No Link</a>
                        <div class="projectItem status none">Not Started</div>
                        <div class="projectItem desc">No Challenge Projects Yet</div>
                    </div>
                </div>
                <div class="projBuffer">Buff</div>
            </div>
        );
    }
}

export default Soft;
