import React, { useState } from "react";
import { Link } from "react-router-dom";
import AuthService from "../services/auth.server";
import "./login.css";

const required = (value) => {
	if (!value) {
		return (
			<div className="alert alert-danger" role="alert">
				This field is required!
			</div>
		);
	}
};

export default function SignInPage() {
	const [state, setState] = useState({
		username: "",
		password: "",
		loading: false,
		message: "",
	});

	function onChangeUserName(e) {
		setState({ username: e.target.value });
	}

	function onChangePassword(e) {
		setState({ password: e.target.value });
	}

	function handleLogin(e) {
		e.preventDefault();
		setState({
			message: "",
			loading: true,
		});
	}

	return (
		<div className="text-center m-5-auto">
			<h2>Sign in with us</h2>
			<form className= "form" action="/home">
				<p>
					<label>Username / Email address</label>
					<br />
					<input type="text" name="first_name" required />
				</p>
				<p>
					<label>Password</label>
					<Link to="/forget-password">
						<label className="right-label">Forget password</label>
					</Link>
					<br />
					<input type="password" name="password" required />
				</p>
				<p>
					<button id="sub_btn" type="submit">
						Login
					</button>
				</p>
			</form>
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
