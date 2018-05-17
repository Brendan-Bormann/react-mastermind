import React, { Component } from 'react';
import './Main.css';

import CurrentGuess from '../CurrentGuess/CurrentGuess';

class Main extends Component {
    render() {
        return (
            <div className="Main">
                <CurrentGuess />
            </div>
        );
    }
}

export default Main;
