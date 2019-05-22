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
            <div class="langPageWrapper">
                <HomeLink color="white" backCol="#707070"/>
                <h1 id="synop">
                    One of my passions is learning languages.<br />These are the
                    languages that I have studied, am studying, or want to study.
                </h1>
                <div id="tableWrapper">
                    <div class="langWrapper">
                        <div class="langName">English</div>
                        <div class="examWrapper">
                            <div id="firstLang" class="passed">
                                First Language - Natural Fluency
                            </div>
                        </div>
                    </div>

                    <div class="langWrapper">
                        <div class="langName">Japanese</div>
                        <div class="examWrapper">
                            <div class="notPassed jlpt">N1</div>
                            <div class="notPassed jlpt">N2</div>
                            <div class="notPassed jlpt">N3</div>
                            <div class="notPassed jlpt">N4</div>
                            <div class="notPassed jlpt">N5</div>
                            <div class="passed jlpt">Studying</div>
                        </div>
                    </div>

                    <div class="langWrapper">
                        <div class="langName">Mandarin</div>
                        <div class="examWrapper">
                            <div class="notPassed hsk">HSK6</div>
                            <div class="notPassed hsk">HSK5</div>
                            <div class="notPassed hsk">HSK4</div>
                            <div class="notPassed hsk">HSK3</div>
                            <div class="notPassed hsk">HSK2</div>
                            <div class="notPassed hsk">HSK1</div>
                            <div class="notPassed notStudying hsk">Studying</div>
                        </div>
                    </div>

                    <div class="langWrapper">
                        <div class="langName">German</div>
                        <div class="examWrapper">
                            <div class="notPassed gz">C2</div>
                            <div class="notPassed gz">C1</div>
                            <div class="notPassed gz">B2</div>
                            <div class="notPassed gz">B1</div>
                            <div class="notPassed gz">A2</div>
                            <div class="notPassed gz">A1</div>
                            <div class="notPassed notStudying gz">Studying</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Langs;
