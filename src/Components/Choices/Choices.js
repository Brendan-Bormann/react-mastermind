import React, { Component } from 'react';
import './Choices.css';

class Choices extends Component {

    state = {
        guesses : []
    }

    sendGuess = async (color) => {
        if (this.state.guesses.length >= 4) {
            console.log('Guesses full...');
        } else {
            await this.setState(prevState => ({ 'guesses': [...prevState.guesses, color] }));
        }
        console.log(this.state.guesses);
    }

	render() {
		return (
            <div className="Choices">
                <span className="circle white" onClick={() => this.sendGuess('white')}></span>
                <span className="circle red" onClick={() => this.sendGuess('red')}></span>
                <span className="circle orange" onClick={() => this.sendGuess('orange')}></span>
                <span className="circle yellow" onClick={() => this.sendGuess('yellow')}></span>
                <span className="circle green" onClick={() => this.sendGuess('green')}></span>
                <span className="circle blue" onClick={() => this.sendGuess('blue')}></span>
                <span className="circle purple" onClick={() => this.sendGuess('purple')}></span>
                <span className="circle black" onClick={() => this.sendGuess('black')}></span>
            </div>
		);
	}
}

export default Choices;
