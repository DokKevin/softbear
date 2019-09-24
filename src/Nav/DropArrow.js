import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import './DropArrow.css';

class DropArrow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className="buttonOutline">
                <div className="upArrowOutter">
                    <div className="upArrowInner"></div>
                </div>

                <div className="downArrowOutter">
                    <div className="downArrowInner"></div>
                </div>
            </div>
        )
    }

    renderHome(){
        ReactDOM.render(<App />, document.getElementById('root'));
    }
}

export default DropArrow;
