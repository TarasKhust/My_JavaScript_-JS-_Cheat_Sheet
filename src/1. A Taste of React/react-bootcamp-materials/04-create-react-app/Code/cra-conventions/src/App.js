import React, { Component } from 'react';
import Dog from './Dog';
import logo from './logo.svg';
import './App.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Dog />
				<div>I AM ANOTHER DIV, NOT IN DOG COMPONENT</div>
			</div>
		);
	}
}

export default App;
