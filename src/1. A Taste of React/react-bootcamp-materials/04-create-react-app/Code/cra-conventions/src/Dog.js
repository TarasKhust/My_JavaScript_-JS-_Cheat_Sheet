import React, { Component } from 'react';
import pug from './pug.jpeg';
import './Dog.css';

class Dog extends Component {
	render() {
		return (
			<div className="Dog">
				<h1>DOG!</h1>
				<img className="Dog-img" src={pug} />
			</div>
		);
	}
}
export default Dog;
