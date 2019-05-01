import React from 'react';
import './HomeLink.css';

class HomeLink extends React.Component {
    constructor(props) {
        super(props);
        this.state = {color: props.color}
    }

    render() {
        return (
            <div class="HLWrap">
                <a id="home" href="https://www.softbear.dev" style={{color: this.props.color}}>
                    SoftBear
                </a>
            </div>
        )
    }
}

export default HomeLink;
