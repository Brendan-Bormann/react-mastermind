import React, { Component } from 'react';
import './App.css';

import Main from './Components/Main/Main';
import Choices from './Components/Choices/Choices';

class App extends Component {

	state = {
		guesses: [],
	}

	updateGuess = guess => {
		this.setState({ 'guesses': ...this.state.guesses, guess});
	}

	render() {
		return (
			<div className="App">
				<Main />
				<Choices guesses={this.state.guesses} updateGuess={this.updateGuess}/>
			</div>
		);
	}
}

export default App;
