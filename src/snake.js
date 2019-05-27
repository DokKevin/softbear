import React from 'react';
import './snake.css';

class Snake extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            player: {
                top: '380px',
                left: '380px',
                direction: "north"
            },
            treat: {
                top: '180px',
                left: '380px'
            },
            didStart: "Start",
            score: 0,
            highScore: 0
        };
    }

    gameTick = () => {
        this.updatePlayerPos().then(() => {
            this.checkPoint().then(val => {
                if(val){
                    this.gotPoint();
                }
                this.checkDeath().then(() => {});
            });
        });
    }

    async updatePlayerPos(){
        let tempTop = parseInt(this.state.player.top.substring(0, this.state.player.top.length - 1));
        let tempLeft = parseInt(this.state.player.left.substring(0, this.state.player.left.length - 1));

        if(this.state.player.direction === "west"){
            tempLeft = tempLeft - 20;
            this.setState({
                player: {
                    top: tempTop.toString() + "px",
                    left: tempLeft.toString() + "px",
                    direction: "west"
                }
            });
        } else if(this.state.player.direction === "north"){
            tempTop = tempTop - 20;
            this.setState({
                player: {
                    top: tempTop.toString() + "px",
                    left: tempLeft.toString() + "px",
                    direction: "north"
                }
            });
        } else if(this.state.player.direction === "east"){
            tempLeft = tempLeft + 20;
            this.setState({
                player: {
                    top: tempTop.toString() + "px",
                    left: tempLeft.toString() + "px",
                    direction: "east"
                }
            });
        } else if(this.state.player.direction === "south"){
            tempTop = tempTop + 20;
            this.setState({
                player: {
                    top: tempTop.toString() + "px",
                    left: tempLeft.toString() + "px",
                    direction: "south"
                }
            });
        }
    }

    async checkPoint(){
        let tempPlayerTop = parseInt(this.state.player.top.substring(0, this.state.player.top.length - 1));
        let tempPlayerLeft = parseInt(this.state.player.left.substring(0, this.state.player.left.length - 1));

        let tempTreatTop = parseInt(this.state.treat.top.substring(0, this.state.treat.top.length - 1));
        let tempTreatLeft = parseInt(this.state.treat.left.substring(0, this.state.treat.left.length - 1));

        if(tempPlayerTop === tempTreatTop && tempPlayerLeft === tempTreatLeft){
            return await true;
        } else {
            return await false;
        }
    }

    gotPoint = () => {
        let newTreatTop = (Math.floor(Math.random() * 38) * 20).toString() + "px";
        let newTreatLeft = (Math.floor(Math.random() * 38) * 20).toString() + "px";

        let newScore = this.state.score + 1;
        let newHigh = this.state.highScore;

        if(this.state.highScore === this.state.score){
            newHigh = this.state.highScore + 1;
        }

        this.setState({
            treat: {
                top: newTreatTop,
                left: newTreatLeft
            },
            score: newScore,
            highScore: newHigh
        });
    }

    async checkDeath(){
        let tempTop = parseInt(this.state.player.top.substring(0, this.state.player.top.length - 1));
        let tempLeft = parseInt(this.state.player.left.substring(0, this.state.player.left.length - 1));

        if(tempTop < 0 || tempTop === 760 || tempLeft < 0 || tempLeft === 760){
            this.resetGame();
        }
    }

    toggleGame = () => {
        if(this.state.didStart === "Start"){
            document.getElementById("snakeContainer").focus();

            this.setState({
                didStart: "Stop"
            });

            this.timerID = setInterval(
                () => this.gameTick(),
                100
            );
        } else {
            this.setState({
                didStart: "Start"
            });

            clearInterval(this.timerID);
        }
    }

    resetGame = () => {
        document.getElementById("snakeContainer").focus();
        
        if(this.state.didStart === "Stop"){
            this.toggleGame();
        } // else do nothing

        this.setState({
            player: {
                top: '380px',
                left: '380px',
                direction: "north"
            },
            score: 0
        });
    }

    handleKeyPress= (event) => {
        switch(event.keyCode){
            case 27:
                this.handleDismiss();
                break;
            case 32:
                this.toggleGame();
                break;
            case 37:
                this.setState({
                    player: {
                        top: this.state.player.top,
                        left: this.state.player.left,
                        direction: "west"
                    }
                });
                break;
            case 38:
                this.setState({
                    player: {
                        top: this.state.player.top,
                        left: this.state.player.left,
                        direction: "north"
                    }
                });
                break;
            case 39:
                this.setState({
                    player: {
                        top: this.state.player.top,
                        left: this.state.player.left,
                        direction: "east"
                    }
                });
                break;
            case 40:
                this.setState({
                    player: {
                        top: this.state.player.top,
                        left: this.state.player.left,
                        direction: "south"
                    }
                });
                break;
            case 82:
                this.resetGame();
                break;
        }
    }

    handleDismiss = () => {
        this.props.dismissGame();
    }

    componentWillUnmount(){
        this.resetGame();
    }

    componentDidMount(){
        document.getElementById("snakeContainer").focus();
    }

    render() {
        return (
            <div className="background-wrapper">
                <div className="exit" onClick={this.handleDismiss}>X</div>
                <div className="buttonWrapper">
                    <span className="gameButton" onClick={this.toggleGame}>{this.state.didStart} Game</span>
                    <span className="gameButton" onClick={this.resetGame}>Reset Game</span>
                </div>
                <div id="snakeContainer" tabIndex="1" onKeyDown={(e) => this.handleKeyPress(e)}>
                    <div className="score">{this.state.score}</div>
                    <div className="highScore">{this.state.highScore}</div>
                    <span className="snakePlayer" style={this.state.player}></span>
                    <span className="treat" style={this.state.treat}></span>
                </div>
            </div>
        )
    }
}

export default Snake;
