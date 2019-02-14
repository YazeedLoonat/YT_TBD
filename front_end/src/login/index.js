import React, { Component } from 'react';
import { Button, Modal, TextField, Snackbar, IconButton } from '@material-ui/core';
import { Close } from '@material-ui/icons';
const request = require("request");


class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isModalOpen: false,
			isSnackBarOpen: false,
			snackBarMessage: ""
		}
	}

	openModal = () => {
		this.setState({ isModalOpen: true, email: "", password: "" });
	}

	closeModal = () => {
		this.setState({ isModalOpen: false, email: "", password: "" });
	}

	openSnackBar = message => {
		this.setState({ isSnackBarOpen: true, snackBarMessage: message });
	}

	closeSnackBar = () => {
		this.setState({ isSnackBarOpen: false });
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
			(err,resp,body) => {
				if ( err || ( resp && resp.statusCode !== 200 )) {
					console.log("do something");
				}
				body = JSON.parse(body);
				if ( body && body.failed ) {
					console.log("failed to log in");
					this.openSnackBar("failed to log in");
				}
				else {
					localStorage.setItem("YT_TBD_BEARER", body);
					this.closeModal();
				}
			}
		);
	};

	render() {
		const { isModalOpen, isSnackBarOpen, snackBarMessage } = this.state;
		return (
			<div style={ {padding: "10px"} }>
				<Button onClick={ this.openModal }>
					Login
				</Button>
				<Modal
					aria-labelledby="simple-modal-title"
					aria-describedby="simple-modal-description"
					open={isModalOpen}
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
						<div>
							<Snackbar
								anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
								open={isSnackBarOpen}
								autoHideDuration={6000}
								onClose={this.closeSnackBar}
								message={snackBarMessage}
								action={[
									<IconButton aria-label="Close" onClick={this.closeSnackBar}>
										<Close />
									</IconButton>
								]}
							/>
						</div>
					</div>
				</Modal>
			</div>
		);
	}

};
export default Login;
