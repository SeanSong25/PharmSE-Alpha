import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import AuthService from "../services/auth.server";
import { Link } from "react-router-dom";

const required = (value) => {
	if (!value) {
		return (
			<div className="alert alert-danger" role="alert">
				This field is required!
			</div>
		);
	}
};
export default class Login extends Component {
	constructor(props) {
		super(props);
		this.handleLogin = this.handleLogin.bind(this);
		this.onChangeUsername = this.onChangeUsername.bind(this);
		this.onChangePassword = this.onChangePassword.bind(this);
		this.state = {
			username: "",
			password: "",
			loading: false,
			message: "",
		};
	}
	onChangeUsername(e) {
		this.setState({
			username: e.target.value,
		});
	}
	onChangePassword(e) {
		this.setState({
			password: e.target.value,
		});
	}
	handleLogin(e) {
		e.preventDefault();
		this.setState({
			message: "",
			loading: true,
		});
		this.form.validateAll();
		if (this.checkBtn.context._errors.length === 0) {
			AuthService.login(this.state.username, this.state.password).then(
				() => {
					this.props.history.push("/profile");
					window.location.reload();
				},
				(error) => {
					const resMessage =
						(error.response && error.response.data && error.response.data.message) ||
						error.message ||
						error.toString();
					this.setState({
						loading: false,
						message: resMessage,
					});
				}
			);
		} else {
			this.setState({
				loading: false,
			});
		}
	}
	render() {
		return (
			<div className="text-center m-5-auto">
				<h2>Sign in with us</h2>
				<Form
					className="col-md-3 form"
					onSubmit={this.handleLogin}
					ref={(c) => {
						this.form = c;
					}}>
					<div className="form-group">
						<label htmlFor="username">Username / Email address</label>
						<Input
							type="text"
							className="form-control"
							name="username"
							value={this.state.username}
							onChange={this.onChangeUsername}
							validations={[required]}
						/>
					</div>
					<br />
					<div className="form-group">
						<label htmlFor="password">Password</label>
						<Input
							type="password"
							className="form-control"
							name="password"
							value={this.state.password}
							onChange={this.onChangePassword}
							validations={[required]}
						/>{" "}
					</div>
					<br />
					<div className="form-group">
						<button
							id="sub_btn"
							className="btn btn-primary btn-block"
							disabled={this.state.loading}>
							{this.state.loading && (
								<span className="spinner-border spinner-border-sm"></span>
							)}
							<span>Login</span>
						</button>
					</div>
					<br />
					{this.state.message && (
						<div className="form-group">
							<div className="alert alert-danger" role="alert">
								{this.state.message}
							</div>
						</div>
					)}
					<CheckButton
						style={{ display: "none" }}
						ref={(c) => {
							this.checkBtn = c;
						}}
					/>
				</Form>
				<footer>
					<p>
						First time? <Link to="/register">Create an account</Link>.
					</p>
					<p>
						<Link to="/">Back to Homepage</Link>.
					</p>
				</footer>
			</div>
		);
	}
}
