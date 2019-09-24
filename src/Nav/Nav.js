import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import './Nav.css';
import DropArrow from "./DropArrow.js";
import LinkList from "./LinkList.js";

class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div>
                <DropArrow />
                <LinkList />
            </div>
        )
    }

    renderHome(){
        ReactDOM.render(<App />, document.getElementById('root'));
    }
}

export default Nav;
