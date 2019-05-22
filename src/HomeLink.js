import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './HomeLink.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class HomeLink extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            color: props.color,
            backCol: props.backCol
        }
    }

    render() {
        return (
            <div class="HLWrap">
                <Link id="home" style={{color: this.props.color, backgroundColor: this.props.backCol}} to="/">
                    SoftBear
                </Link>
            </div>
        )
    }

    renderHome(){
        ReactDOM.render(<App />, document.getElementById('root'));
    }
}

HomeLink.defaultProps = {
    backCol: "white"
}

export default HomeLink;
