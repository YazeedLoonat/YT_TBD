import React, { Component } from 'react';
import Login from './login/index';
import GridElement from './gridElement/index';
import { Paper, Grid } from '@material-ui/core';

class App extends Component {
	render() {
		return (
			<div style={ {height:"90vh"} }>
				<Login toDisplay={false} />
				<Paper className="App">
					<Grid container justify="center" spacing={16}>
						{[0, 1, 2, 3, 4, 5, 6, 7].map(value => (
							<Grid key={`GridElement_value_${value}`} item >
								<GridElement value={value} />
							</Grid>
						))}
					</Grid>
				</Paper>
			</div>
		);
	}
}

/*
	material ui documentation https://material-ui.com/
*/

export default App;
