import React, { Component } from 'react';
import './Mastermind.css';

class Mastermind extends Component {

	state = {
        answer: [],
        guesses: [],
        guess1: [],
        guess1correct: [0, 0],
        guess2: [],
        guess2correct: [0, 0],
        guess3: [],
        guess3correct: [0, 0],
        guess4: [],
        guess4correct: [0, 0],
        guess5: [],
        guess5correct: [0, 0],
        guess6: [],
        guess6correct: [0, 0],
        guess7: [],
        guess7correct: [0, 0],
        guess8: [],
        guess8correct: [0, 0],
        guess9: [],
        guess9correct: [0, 0],
        guess10: [],
        guess10correct: [0, 0],
        guessNum: 0,
        fade: 'animated fadeIn'
    }

    Intro = () => {
        if (this.state.answer.length === 4) {
            return (
                <span className="guess-area">
                    <div className="animated fadeInRightBig circle-lg white" onClick={() => this.addGuess('white')}></div>
                    <div className="animated fadeInDownBig circle-lg red" onClick={() => this.addGuess('red')}></div>
                    <div className="animated fadeInUpBig circle-lg orange" onClick={() => this.addGuess('orange')}></div>
                    <div className="animated fadeInUp circle-lg yellow" onClick={() => this.addGuess('yellow')}></div>
                    <div className="animated fadeInUp circle-lg green" onClick={() => this.addGuess('green')}></div>
                    <div className="animated fadeInUpBig circle-lg blue" onClick={() => this.addGuess('blue')}></div>
                    <div className="animated fadeInDownBig circle-lg purple" onClick={() => this.addGuess('purple')}></div>
                    <div className="animated fadeInLeftBig circle-lg black" onClick={() => this.addGuess('black')}></div>
                </span>
            );
        }
        return (
            <div className="intro">
                <button className="submit-clear start " onClick={() => this.startGame()}>Start Game</button>
            </div>
        );
    }

    startGame = async () => {
        var colors = ['white', 'red', 'orange', 'yellow', 'green', 'blue', 'purple', 'black'];
        var answer = [];
        for (let i = 0; i < 4; i++) {
            answer.push(colors[Math.floor(Math.random()*colors.length)]);
        }

        if (!localStorage.wins) {
            window.localStorage.clear();
            window.localStorage.wins = 0;
        }

        await this.setState({
            answer: [],
            guesses: [],
            guess1: [],
            guess1correct: [0, 0],
            guess2: [],
            guess2correct: [0, 0],
            guess3: [],
            guess3correct: [0, 0],
            guess4: [],
            guess4correct: [0, 0],
            guess5: [],
            guess5correct: [0, 0],
            guess6: [],
            guess6correct: [0, 0],
            guess7: [],
            guess7correct: [0, 0],
            guess8: [],
            guess8correct: [0, 0],
            guess9: [],
            guess9correct: [0, 0],
            guess10: [],
            guess10correct: [0, 0],
            guessNum: 0
        });

        await this.setState({ 'answer': answer});
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

    // Please clean me up :(
    submitGuess = async () => {
        if (this.state.guess1.length !== 4 && this.state.guesses.length === 4) {
            await this.setState({ 'guess1': this.state.guesses });
            this.clearGuess();
            this.compareGuess(this.state.guess1, 1);
        } else if (this.state.guess2.length !== 4 && this.state.guesses.length === 4) {
            await this.setState({ 'guess2': this.state.guesses });
            this.clearGuess();
            this.compareGuess(this.state.guess2, 2);
        } else if (this.state.guess3.length !== 4 && this.state.guesses.length === 4) {
            await this.setState({ 'guess3': this.state.guesses });
            this.clearGuess();
            this.compareGuess(this.state.guess3, 3);
        } else if (this.state.guess4.length !== 4 && this.state.guesses.length === 4) {
            await this.setState({ 'guess4': this.state.guesses });
            this.clearGuess();
            this.compareGuess(this.state.guess4, 4);
        } else if (this.state.guess5.length !== 4 && this.state.guesses.length === 4) {
            await this.setState({ 'guess5': this.state.guesses });
            this.clearGuess();
            this.compareGuess(this.state.guess5, 5);
        } else if (this.state.guess6.length !== 4 && this.state.guesses.length === 4) {
            await this.setState({ 'guess6': this.state.guesses });
            this.clearGuess();
            this.compareGuess(this.state.guess6, 6);
        } else if (this.state.guess7.length !== 4 && this.state.guesses.length === 4) {
            await this.setState({ 'guess7': this.state.guesses });
            this.clearGuess();
            this.compareGuess(this.state.guess7, 7);
        } else if (this.state.guess8.length !== 4 && this.state.guesses.length === 4) {
            await this.setState({ 'guess8': this.state.guesses });
            this.clearGuess();
            this.compareGuess(this.state.guess8, 8);
        } else if (this.state.guess9.length !== 4 && this.state.guesses.length === 4) {
            await this.setState({ 'guess9': this.state.guesses });
            this.clearGuess();
            this.compareGuess(this.state.guess9, 9);
        } else if (this.state.guess10.length !== 4 && this.state.guesses.length === 4) {
            await this.setState({ 'guess10': this.state.guesses });
            this.clearGuess();
            this.compareGuess(this.state.guess10, 10);
        } else if (this.state.guess10.length === 4) {
            alert('You lost.');
            window.location.reload();
        } else {
            alert('Guess is invalid.');
        }
    }

    compareGuess = async (guess, guessNum) => {
        let fullCorrect = 0;
        let partCorrect = 0;
        for (let i = 0; i < this.state.answer.length; i++) {
            if (this.state.answer[i] === guess[i]) {
                fullCorrect++;
            } else {
                for (let x = 0; x < this.state.answer.length; x++) {
                    if (this.state.answer[i] === guess[x]) {
                        partCorrect++;
                        break;
                    }
                }
            }
        }
        var stateItem = 'guess' + guessNum.toString() + 'correct';
        var response = [fullCorrect, partCorrect];
        console.log(stateItem);
        console.log(...response);
        await this.setState({ [stateItem]: [...response] });
        if (fullCorrect === 4) {
            window.localStorage.wins = parseInt(window.localStorage.wins, 10) + 1;
            var playAgain = window.confirm(`You won! Total wins: ${window.localStorage.wins}. Play again?`);
            if (playAgain) {
                window.location.reload();
            }
        }
    }

	render() {
		return (
			<div className="Mastermind">
                <this.Intro />
                <hr />
                <span className='guess-preview'>
                    <div className={'circle-lgr placeHolder ' + this.state.guesses[0] + " " + this.state.fade}></div>
                    <div className={'circle-lgr placeHolder ' + this.state.guesses[1] + " " + this.state.fade}></div>
                    <div className={'circle-lgr placeHolder ' + this.state.guesses[2] + " " + this.state.fade}></div>
                    <div className={'circle-lgr placeHolder ' + this.state.guesses[3] + " " + this.state.fade}></div>
                </span>
                <button className="submit-clear" onClick={() => this.submitGuess()}>Submit</button>
                <button className="submit-clear" onClick={() => this.clearGuess()}>Clear</button>
                <hr />
                <span className="guesses-made">
                    <div className="guess-zone">
                        <div className="score correct-spot">Full</div>
                        <div className='circle'></div>
                        <div className='circle'></div>
                        <div className='circle'></div>
                        <div className='circle'></div>
                        <div className="score correct-color">Part</div>
                    </div>
                    <div className="guess-zone one">
                        <div className="score correct-spot">{this.state.guess1correct[0]}</div>
                        <div className={'circle ' + this.state.guess1[0]}></div>
                        <div className={'circle ' + this.state.guess1[1]}></div>
                        <div className={'circle ' + this.state.guess1[2]}></div>
                        <div className={'circle ' + this.state.guess1[3]}></div>
                        <div className="score correct-color">{this.state.guess1correct[1]}</div>
                    </div>
                    <div className="guess-zone two">
                        <div className="score correct-spot">{this.state.guess2correct[0]}</div>
                        <div className={'circle ' + this.state.guess2[0]}></div>
                        <div className={'circle ' + this.state.guess2[1]}></div>
                        <div className={'circle ' + this.state.guess2[2]}></div>
                        <div className={'circle ' + this.state.guess2[3]}></div>
                        <div className="score correct-color">{this.state.guess2correct[1]}</div>
                    </div>
                    <div className="guess-zone one">
                        <div className="score correct-spot">{this.state.guess3correct[0]}</div>
                        <div className={'circle ' + this.state.guess3[0]}></div>
                        <div className={'circle ' + this.state.guess3[1]}></div>
                        <div className={'circle ' + this.state.guess3[2]}></div>
                        <div className={'circle ' + this.state.guess3[3]}></div>
                        <div className="score correct-color">{this.state.guess3correct[1]}</div>
                    </div>
                    <div className="guess-zone two">
                        <div className="score correct-spot">{this.state.guess4correct[0]}</div>
                        <div className={'circle ' + this.state.guess4[0]}></div>
                        <div className={'circle ' + this.state.guess4[1]}></div>
                        <div className={'circle ' + this.state.guess4[2]}></div>
                        <div className={'circle ' + this.state.guess4[3]}></div>
                        <div className="score correct-color">{this.state.guess4correct[1]}</div>
                    </div>
                    <div className="guess-zone one">
                        <div className="score correct-spot">{this.state.guess5correct[0]}</div>
                        <div className={'circle ' + this.state.guess5[0]}></div>
                        <div className={'circle ' + this.state.guess5[1]}></div>
                        <div className={'circle ' + this.state.guess5[2]}></div>
                        <div className={'circle ' + this.state.guess5[3]}></div>
                        <div className="score correct-color">{this.state.guess5correct[1]}</div>
                    </div>
                    <div className="guess-zone two">
                        <div className="score correct-spot">{this.state.guess6correct[0]}</div>
                        <div className={'circle ' + this.state.guess6[0]}></div>
                        <div className={'circle ' + this.state.guess6[1]}></div>
                        <div className={'circle ' + this.state.guess6[2]}></div>
                        <div className={'circle ' + this.state.guess6[3]}></div>
                        <div className="score correct-color">{this.state.guess6correct[1]}</div>
                    </div>
                    <div className="guess-zone one">
                        <div className="score correct-spot">{this.state.guess7correct[0]}</div>
                        <div className={'circle ' + this.state.guess7[0]}></div>
                        <div className={'circle ' + this.state.guess7[1]}></div>
                        <div className={'circle ' + this.state.guess7[2]}></div>
                        <div className={'circle ' + this.state.guess7[3]}></div>
                        <div className="score correct-color">{this.state.guess7correct[1]}</div>
                    </div>
                    <div className="guess-zone one">
                        <div className="score correct-spot">{this.state.guess8correct[0]}</div>
                        <div className={'circle ' + this.state.guess8[0]}></div>
                        <div className={'circle ' + this.state.guess8[1]}></div>
                        <div className={'circle ' + this.state.guess8[2]}></div>
                        <div className={'circle ' + this.state.guess8[3]}></div>
                        <div className="score correct-color">{this.state.guess8correct[1]}</div>
                    </div>
                    <div className="guess-zone two">
                        <div className="score correct-spot">{this.state.guess9correct[0]}</div>
                        <div className={'circle ' + this.state.guess9[0]}></div>
                        <div className={'circle ' + this.state.guess9[1]}></div>
                        <div className={'circle ' + this.state.guess9[2]}></div>
                        <div className={'circle ' + this.state.guess9[3]}></div>
                        <div className="score correct-color">{this.state.guess9correct[1]}</div>
                    </div>
                    <div className="guess-zone one">
                        <div className="score correct-spot">{this.state.guess10correct[0]}</div>
                        <div className={'circle ' + this.state.guess10[0]}></div>
                        <div className={'circle ' + this.state.guess10[1]}></div>
                        <div className={'circle ' + this.state.guess10[2]}></div>
                        <div className={'circle ' + this.state.guess10[3]}></div>
                        <div className="score correct-color">{this.state.guess10correct[1]}</div>
                    </div>
                </span>
			</div>
		);
	}
}

export default Mastermind;
