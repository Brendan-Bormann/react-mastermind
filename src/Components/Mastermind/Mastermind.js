import React, { Component } from 'react';
import './Mastermind.css';

class Mastermind extends Component {

	state = {
        guesses: [],
        guess1: [],
        guess2: [],
        guess3: [],
        guess4: [],
        guess5: [],
        guess6: [],
        guess7: [],
        secret: [],
        guessNum: 0
    }
    
    addGuess = async (color) => {
        if (this.state.guesses.length >= 4) {
            alert('Guesses is full...');
        } else {
            await this.setState({ 'guesses': [...this.state.guesses, color] });
        }
    }

    clearGuess = () => {
        this.setState({ 'guesses': []});
    }

    submitGuess = () => {
        this.setState({ 'guessNum': this.state.guessNum + 1 });
        console.log(this.state.guesses);
    }

	render() {
		return (
			<div className="Mastermind">
				<span className="guess-area">
                    <div className="circle white" onClick={() => this.addGuess('white')}></div>
                    <div className="circle red" onClick={() => this.addGuess('red')}></div>
                    <div className="circle orange" onClick={() => this.addGuess('orange')}></div>
                    <div className="circle yellow" onClick={() => this.addGuess('yellow')}></div>
                    <div className="circle green" onClick={() => this.addGuess('green')}></div>
                    <div className="circle blue" onClick={() => this.addGuess('blue')}></div>
                    <div className="circle purple" onClick={() => this.addGuess('purple')}></div>
                    <div className="circle black" onClick={() => this.addGuess('black')}></div>
                </span>
                <hr />
                <span className='guess-preview'>
                    <div className={'circle ' + this.state.guesses[0]}></div>
                    <div className={'circle ' + this.state.guesses[1]}></div>
                    <div className={'circle ' + this.state.guesses[2]}></div>
                    <div className={'circle ' + this.state.guesses[3]}></div>
                </span>
                <button className="submit-clear" onClick={() => this.submitGuess()}>Submit Guess</button>
                <button className="submit-clear" onClick={() => this.clearGuess()}>Clear Guess</button>
                <hr />
                <span className="guesses-made">
                    <div className="guess-zone">
                        <div className="score correct-spot">0</div>
                        <div className={'circle ' + this.state.guesses[0]}></div>
                        <div className={'circle ' + this.state.guesses[1]}></div>
                        <div className={'circle ' + this.state.guesses[2]}></div>
                        <div className={'circle ' + this.state.guesses[3]}></div>
                        <div className="score correct-color">0</div>
                    </div>
                    <div className="guess-zone">
                        <div className="score correct-spot">0</div>
                        <div className={'circle ' + this.state.guesses[0]}></div>
                        <div className={'circle ' + this.state.guesses[1]}></div>
                        <div className={'circle ' + this.state.guesses[2]}></div>
                        <div className={'circle ' + this.state.guesses[3]}></div>
                        <div className="score correct-color">0</div>
                    </div>
                    <div className="guess-zone">
                        <div className="score correct-spot">0</div>
                        <div className={'circle ' + this.state.guesses[0]}></div>
                        <div className={'circle ' + this.state.guesses[1]}></div>
                        <div className={'circle ' + this.state.guesses[2]}></div>
                        <div className={'circle ' + this.state.guesses[3]}></div>
                        <div className="score correct-color">0</div>
                    </div>
                    <div className="guess-zone">
                        <div className="score correct-spot">0</div>
                        <div className={'circle ' + this.state.guesses[0]}></div>
                        <div className={'circle ' + this.state.guesses[1]}></div>
                        <div className={'circle ' + this.state.guesses[2]}></div>
                        <div className={'circle ' + this.state.guesses[3]}></div>
                        <div className="score correct-color">0</div>
                    </div>
                    <div className="guess-zone">
                        <div className="score correct-spot">0</div>
                        <div className={'circle ' + this.state.guesses[0]}></div>
                        <div className={'circle ' + this.state.guesses[1]}></div>
                        <div className={'circle ' + this.state.guesses[2]}></div>
                        <div className={'circle ' + this.state.guesses[3]}></div>
                        <div className="score correct-color">0</div>
                    </div>
                    <div className="guess-zone">
                        <div className="score correct-spot">0</div>
                        <div className={'circle ' + this.state.guesses[0]}></div>
                        <div className={'circle ' + this.state.guesses[1]}></div>
                        <div className={'circle ' + this.state.guesses[2]}></div>
                        <div className={'circle ' + this.state.guesses[3]}></div>
                        <div className="score correct-color">0</div>
                    </div>
                    <div className="guess-zone">
                        <div className="score correct-spot">0</div>
                        <div className={'circle ' + this.state.guesses[0]}></div>
                        <div className={'circle ' + this.state.guesses[1]}></div>
                        <div className={'circle ' + this.state.guesses[2]}></div>
                        <div className={'circle ' + this.state.guesses[3]}></div>
                        <div className="score correct-color">0</div>
                    </div>
                    <div className="guess-zone">
                        <div className="score correct-spot">0</div>
                        <div className={'circle ' + this.state.guesses[0]}></div>
                        <div className={'circle ' + this.state.guesses[1]}></div>
                        <div className={'circle ' + this.state.guesses[2]}></div>
                        <div className={'circle ' + this.state.guesses[3]}></div>
                        <div className="score correct-color">0</div>
                    </div>
                    <div className="guess-zone">
                        <div className="score correct-spot">0</div>
                        <div className={'circle ' + this.state.guesses[0]}></div>
                        <div className={'circle ' + this.state.guesses[1]}></div>
                        <div className={'circle ' + this.state.guesses[2]}></div>
                        <div className={'circle ' + this.state.guesses[3]}></div>
                        <div className="score correct-color">0</div>
                    </div>
                    <div className="guess-zone">
                        <div className="score correct-spot">0</div>
                        <div className={'circle ' + this.state.guesses[0]}></div>
                        <div className={'circle ' + this.state.guesses[1]}></div>
                        <div className={'circle ' + this.state.guesses[2]}></div>
                        <div className={'circle ' + this.state.guesses[3]}></div>
                        <div className="score correct-color">0</div>
                    </div>
                </span>
			</div>
		);
	}
}

export default Mastermind;
