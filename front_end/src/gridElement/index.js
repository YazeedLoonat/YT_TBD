import React, { Component } from 'react';
import {
	Card,
	CardActionArea,
	CardMedia,
	CardContent,
	Typography
} from '@material-ui/core';

class GridElement extends Component {
	clickHandler = () => {
		console.log("on click");
	}

	render() {
		const props = {
			title: "Name",
			imageURL: "http://i.imgur.com/AI00mHu.gif"
		};
		return (
			<Card style={{padding: "10px"}}>
				<CardActionArea
					onClick={this.clickHandler}
				>
					<CardMedia
						component="img"
						alt={props.title}
						height="225px"
						image={props.imageURL}
						title={props.title}
					/>
					<CardContent>
						<Typography gutterBottom variant="h5" component="h2">
							{props.title}
						</Typography>
					</CardContent>
				</CardActionArea>
			</Card>
		);
	}

};
export default GridElement;
