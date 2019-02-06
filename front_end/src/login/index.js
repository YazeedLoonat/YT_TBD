import React, { Component } from 'react';
import { Button, Modal, TextField } from '@material-ui/core';
const request = require("request");


class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			open: false
		}
	}

	openModal = () => {
		this.setState({ open: true, email: "", password: "" });
	}

	closeModal = () => {
		this.setState({ open: false, email: "", password: "" });
	}

	modalStyle = () => (
		{
			top: "50%",
			left: "50%",
			transform: "translate(-50%, -50%)",
			position: "absolute",
			outline: "none",
			padding: "10px",
			backgroundColor: "white"
		}
	);

	handleChange = name => event => {
		this.setState({
			[name]: event.target.value,
		});
	};

	submitLogin = () => {
		request.post(
			{
				url:'http://localhost:8080/login',
				form: {
					email:this.state.email,
					password:this.state.password
				}
			},
			(err,httpResponse,body) => {
				console.log("err:", err);
				console.log("httpResponse:", httpResponse);
				console.log("body:", body);
			}
		);
	};

	render() {
		return (
			<div style={ {padding: "10px"} }>
				<Button onClick={ this.openModal }>
					Login
				</Button>
				<Modal
					aria-labelledby="simple-modal-title"
					aria-describedby="simple-modal-description"
					open={this.state.open}
					onClose={this.closeModal}
				>
					<div style={this.modalStyle()}>
						<TextField
							required
							type="text"
							id="email"
							label="Email"
							margin="normal"
							variant="filled"
							value={this.state.email}
							onChange={this.handleChange("email")}
						/>
						<br />
						<TextField
							required
							type="password"
							id="password"
							label="Password"
							margin="normal"
							variant="filled"
							value={this.state.password}
							onChange={this.handleChange("password")}
						/>
						<br />
						<Button onClick={ this.submitLogin }>
							Submit
						</Button>
						<Button onClick={ this.closeModal }>
							Close
						</Button>
					</div>
				</Modal>
			</div>
		);
	}

};
export default Login;
