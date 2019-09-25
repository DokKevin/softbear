import React from 'react';
import HomeLink from './HomeLink.js';
import './Langs.css';

class Langs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className="langPageWrapper">
                <span className="langBackImg"></span>
                <HomeLink color="#9F9F9F" backCol="transparent"/>
                <h1 id="synop">
                    One of my passions is learning languages.<br />These are the
                    languages that I have studied, am studying, or want to study.
                </h1>
                <div id="tableWrapper">
                    <div className="langWrapper">
                        <div className="langName">English</div>
                        <div className="examWrapper">
                            <div id="firstLang" className="passed">
                                First Language - Natural Fluency
                            </div>
                        </div>
                    </div>

                    <div className="langWrapper">
                        <div className="langName">Japanese</div>
                        <div className="examWrapper">
                            <div className="notPassed jlpt">N1</div>
                            <div className="notPassed jlpt">N2</div>
                            <div className="notPassed jlpt">N3</div>
                            <div className="passed jlpt">N4</div>
                            <div className="passed jlpt">N5</div>
                            <div className="passed jlpt">Studying</div>
                        </div>
                    </div>

                    <div className="langWrapper">
                        <div className="langName">German</div>
                        <div className="examWrapper">
                            <div className="notPassed gz">C2</div>
                            <div className="notPassed gz">C1</div>
                            <div className="notPassed gz">B2</div>
                            <div className="notPassed gz">B1</div>
                            <div className="notPassed gz">A2</div>
                            <div className="notPassed gz">A1</div>
                            <div className="notPassed notStudying gz">Studying</div>
                        </div>
                    </div>

                    <div className="langWrapper">
                        <div className="langName">Mandarin</div>
                        <div className="examWrapper">
                            <div className="notPassed hsk">HSK6</div>
                            <div className="notPassed hsk">HSK5</div>
                            <div className="notPassed hsk">HSK4</div>
                            <div className="notPassed hsk">HSK3</div>
                            <div className="notPassed hsk">HSK2</div>
                            <div className="notPassed hsk">HSK1</div>
                            <div className="notPassed notStudying hsk">Studying</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Langs;
