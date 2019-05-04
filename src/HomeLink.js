import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './HomeLink.css';

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
            <div class="HLWrap" style={{backgroundColor: this.props.backCol}}>
                <div id="home" href="https://www.softbear.dev" style={{color: this.props.color}} onClick={this.renderHome}>
                    SoftBear
                </div>
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
