import React from 'react';
import './snake.css';

class Snake extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            player: {
                top: '380px',
                left: '380px',
                body: [],
                direction: "north"
            },
            treat: {
                top: '180px',
                left: '380px'
            },
            didStart: "Start",
            // TODO: persist game modes' individual high score when switching game modes
            score: 0,
            highScore: 0,
            easyButtID: "notSelected",
            hardButtID: "selected",
            mode: 1
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
        let tempBody = this.state.player.body;

        if(this.state.mode && this.state.score > 0){
            let tempSeg = tempBody.pop();
            tempBody.unshift(tempSeg);
            tempBody[0][0] = this.state.player.top;
            tempBody[0][1] = this.state.player.left;
        } // else do nothing

        if(this.state.player.direction === "west"){
            tempLeft = tempLeft - 20;
            this.setState({
                player: {
                    top: tempTop.toString() + "px",
                    left: tempLeft.toString() + "px",
                    body: tempBody,
                    direction: "west"
                }
            });
        } else if(this.state.player.direction === "north"){
            tempTop = tempTop - 20;
            this.setState({
                player: {
                    top: tempTop.toString() + "px",
                    left: tempLeft.toString() + "px",
                    body: tempBody,
                    direction: "north"
                }
            });
        } else if(this.state.player.direction === "east"){
            tempLeft = tempLeft + 20;
            this.setState({
                player: {
                    top: tempTop.toString() + "px",
                    left: tempLeft.toString() + "px",
                    body: tempBody,
                    direction: "east"
                }
            });
        } else if(this.state.player.direction === "south"){
            tempTop = tempTop + 20;
            this.setState({
                player: {
                    top: tempTop.toString() + "px",
                    left: tempLeft.toString() + "px",
                    body: tempBody,
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

    addTailSeg = () => {
        if(this.state.mode){
            let tempPlayerTop = parseInt(this.state.player.top.substring(0, this.state.player.top.length - 1));
            tempPlayerTop = tempPlayerTop - 1;

            let tempBody = this.state.player.body;
            tempBody.push([tempPlayerTop.toString() + "px", this.state.player.left]);

            this.setState({
                player: {
                    top: this.state.player.top,
                    left: this.state.player.left,
                    body: tempBody,
                    direction: this.state.player.direction
                }
            });
        } // else do nothing
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

        this.addTailSeg();
    }

    async checkDeath(){
        let tempTop = parseInt(this.state.player.top.substring(0, this.state.player.top.length - 1));
        let tempLeft = parseInt(this.state.player.left.substring(0, this.state.player.left.length - 1));

        if(tempTop < 0 || tempTop === 760 || tempLeft < 0 || tempLeft === 760){
            this.resetGame();
        }

        if(this.state.mode){
            for(let i = 0; i < this.state.player.body.length; i++){
                let tempSegTop = parseInt(this.state.player.body[i][0].substring(0, this.state.player.body[i][0].length - 1));
                let tempSegLeft = parseInt(this.state.player.body[i][1].substring(0, this.state.player.body[i][1].length - 1));
                if(tempTop === tempSegTop && tempLeft === tempSegLeft){
                    this.resetGame();
                }
            }
        } // else do nothing
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
            document.getElementById("snakeContainer").focus();

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
                body: [],
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
                if(this.state.player.direction != "east"){
                    this.setState({
                        player: {
                            top: this.state.player.top,
                            body: this.state.player.body,
                            left: this.state.player.left,
                            direction: "west"
                        }
                    });
                } // else do nothing
                break;
            case 38:
                if(this.state.player.direction != "south"){
                    this.setState({
                        player: {
                            top: this.state.player.top,
                            body: this.state.player.body,
                            left: this.state.player.left,
                            direction: "north"
                        }
                    });
                } // else do nothing
                break;
            case 39:
                if(this.state.player.direction != "west"){
                    this.setState({
                        player: {
                            top: this.state.player.top,
                            left: this.state.player.left,
                            body: this.state.player.body,
                            direction: "east"
                        }
                    });
                } // else do nothing
                break;
            case 40:
                if(this.state.player.direction != "north"){
                    this.setState({
                        player: {
                            top: this.state.player.top,
                            left: this.state.player.left,
                            body: this.state.player.body,
                            direction: "south"
                        }
                    });
                } // else do nothing
                break;
            case 69:
                this.toggleMode(0);
                break;
            case 72:
                this.toggleMode(1);
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

    toggleMode = (nMode) => {
        if(this.state.didStart === "Stop"){
            this.resetGame();
        } // else do nothing

        // Temporarily hard reset on game mode switch
        this.setState({
            score: 0,
            highScore: 0
        });

        let tempEasy = "selected";
        let tempHard = "notSelected";

        if(nMode === 1){
            tempEasy = "notSelected";
            tempHard = "selected";
        } // else stay as assigned above if statement

        this.setState({
            easyButtID: tempEasy,
            hardButtID: tempHard,
            mode: nMode
        });

        document.getElementById("snakeContainer").focus();
    }

    //TODO: Make game size reactive
    //TODO: Popup list of keyboard shortcuts
    //TODO: Make game playable on mobile

    render() {
        return (
            <div className="background-wrapper">
                <div className="exit" onClick={this.handleDismiss}>X</div>
                <div className="buttonWrapper">
                    <span className="diffButton leftButt" id={this.state.hardButtID} onClick={() => this.toggleMode(1)}>Hard Mode</span>
                    <span className="diffButton rightButt" id={this.state.easyButtID} onClick={() => this.toggleMode(0)}>Easy Mode</span>

                    <span className="gameButton leftButt" id={this.state.didStart} onClick={this.toggleGame}>{this.state.didStart} Game</span>
                    <span className="gameButton rightButt" onClick={this.resetGame}>Reset Game</span>
                </div>
                <div id="snakeContainer" tabIndex="1" onKeyDown={(e) => this.handleKeyPress(e)}>
                    <div className="score">{this.state.score}</div>
                    <div className="highScore">{this.state.highScore}</div>
                    <span className="snakePlayer" style={this.state.player}></span>
                    <span>
                        {
                            this.state.player.body.map(el => <span className="snakePlayer" style={{top: el[0], left: el[1]}}></span>)
                        }
                    </span>
                    <span className="treat" style={this.state.treat}></span>
                </div>
            </div>
        )
    }
}

export default Snake;
