import React from 'react';
import ReactDOM from 'react-dom';
import HomeLink from './HomeLink.js';
import './Soft.css';

class Soft extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bigColor: "#F5F5F5",
            bigBackColor: "#37C0FF",
            challColor: "#909090",
            challBackColor: "#F5F5F5"
        }
    }

    render() {
        return (
            <div class="softPageWrapper">
                <HomeLink color="#F5F5F5" backCol="#909090"/>
                <h1 id="softSynop">
                    I am an academically trained Software Engineer.
                    <br />
                    I like to spend time every week developing larger projects,
                    and a day every week developing challenge projects with a
                    one day deadline.
                </h1>
                <div class="projectsWrapper">
                    <div class="tabsWrapper">
                        <div class="bigTab" style={{color: this.state.bigColor, borderColor: this.state.bigBordColor, backgroundColor: this.state.bigBackColor}} onClick={this.renderBigProjs}>Large Projects</div>
                        <div class="challTab" style={{color: this.state.challColor, borderColor: this.state.challBordColor, backgroundColor: this.state.challBackColor}} onClick={this.renderChallProjs}>Challenge Projects</div>
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
            bigColor: "#F5F5F5",
            bigBackColor: "#37C0FF",
            challColor: "#909090",
            challBackColor: "#F5F5F5"
        });
        ReactDOM.render(<BigList />, document.getElementById('projectList'));
    }

    renderChallProjs = () => {
        this.setState({
            bigColor: "#909090",
            bigBackColor: "#F5F5F5",
            challColor: "#F5F5F5",
            challBackColor: "#37C0FF"
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
            <div>Test Big</div>
        );
    }
}

class ChallList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render(){
        return (
            <div>Test Challenge</div>
        );
    }
}

export default Soft;
