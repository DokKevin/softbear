import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import './LinkList.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class LinkList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className="listContainer">
                <Link className="navLink" to="/">Home</Link>
                <Link className="navLink" to="/langs/">Languages</Link>
                <Link className="navLink" to="/soft/">Software</Link>
            </div>
        )
    }

    renderHome(){
        ReactDOM.render(<App />, document.getElementById('root'));
    }
}

export default LinkList;
