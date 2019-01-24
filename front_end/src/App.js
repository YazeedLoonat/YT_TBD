import React, { Component } from 'react';
import './App.css';
import { Paper, Grid } from '@material-ui/core';

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
			<Paper className="App">
				<Grid container spacing={16}>
					<Grid item xs={12}>
						<Grid container justify="center">
							{[0, 1, 2].map(value => (
								<Grid key={value} item>
									<Paper>
										Ayy
									</Paper>
								</Grid>
							))}
						</Grid>
					</Grid>
				</Grid>
			</Paper>
		);
	}
}

export default App;
