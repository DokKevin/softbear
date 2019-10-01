import React from 'react';
import ReactDOM from 'react-dom';
import './RecipesHome.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class RecipesHome extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className="recipesHomeWrapper">
                Temp
            </div>
        )
    }
}

export default RecipesHome;
