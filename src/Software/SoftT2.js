import React from 'react';
import ReactDOM from 'react-dom';
import './SoftT2.css';
import Snake from '../snake.js';

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

class ProjectItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render(){
        return (
            <div className="projItemWrapper">

            </div>
        );
    }
}

export default SoftT2;
