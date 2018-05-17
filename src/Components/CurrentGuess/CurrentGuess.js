import React, { Component } from 'react';
import './CurrentGuess.css';

class CurrentGuess extends Component {
    render() {
        return (
            <span className="CurrentGuess">
                <span className="circle green"></span>
            </span>
        );
    }
}

export default CurrentGuess;
