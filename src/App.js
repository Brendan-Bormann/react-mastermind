import React, { Component } from 'react';
import './App.css';

import Mastermind from './Components/Mastermind/Mastermind';

class App extends Component {

	render() {
		return (
			<div className="App">
				<h1 className="animated lightSpeedIn">MASTERMIND</h1>
				<Mastermind />
			</div>
		);
	}
}

export default App;
