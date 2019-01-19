import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
const request = require("request");

class App extends Component {
	componentDidMount() {
		request.post(
			{
				url:'http://localhost:8080',
				form: {key:'value'}
			},
			(err,httpResponse,body) => {
				console.log("err:", err);
				console.log("httpResponse:", httpResponse);
				console.log("body:", body);
			}
		);
	}

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<p>
						Edit <code>src/App.js</code> and save to reload.
					</p>
					<a
						className="App-link"
						href="https://reactjs.org"
						target="_blank"
						rel="noopener noreferrer"
					>
						Learn React
					</a>
				</header>
			</div>
		);
	}
}

export default App;
