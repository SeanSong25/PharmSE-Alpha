import React, { useState, useRef, useEffect } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import AuthService from "../services/auth.server";
import { Link, useNavigate } from "react-router-dom";

const required = (value) => {
	if (!value) {
		return (
			<div className="alert alert-danger" role="alert">
				This field is required!
			</div>
		);
	}
};
const Login = (props) => {
	const form = useRef();
	const checkBtn = useRef();
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [loading, setLoading] = useState(false);
	const [message, setMessage] = useState("");
	const [successful, setSuccessful] = useState(false);
	const onChangeUsername = (e) => {
		const username = e.target.value;
		setUsername(username);
	};
	const onChangePassword = (e) => {
		const password = e.target.value;
		setPassword(password);
	};
	// Redirect
	let navigate = useNavigate();
	useEffect(() => {
		if (successful) {
			return navigate("/feed");
		}
	}, [successful]);
	const handleLogin = (e) => {
		e.preventDefault();
		setMessage("");
		setLoading(true);
		form.current.validateAll();
		if (checkBtn.current.context._errors.length === 0) {
			AuthService.login(username, password).then(
				() => {
					setSuccessful(true);
				},
				(error) => {
					const resMessage =
						(error.response && error.response.data && error.response.data.message) ||
						error.message ||
						error.toString();
					setLoading(false);
					setMessage(resMessage);
				}
			);
		} else {
			setLoading(false);
		}
	};
	return (
		<div className="text-center m-5-auto vh-100 background-blurImg">
			<div className="center-screen background-form">
				<h2 className="text-white">Sign in with us</h2>
				<Form onSubmit={handleLogin} ref={form} className="col-md-4 form">
					<div className="form-group">
						<label htmlFor="username">Username</label>
						<Input
							type="text"
							className="form-control"
							name="username"
							value={username}
							onChange={onChangeUsername}
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
							value={password}
							onChange={onChangePassword}
							validations={[required]}
						/>
					</div>
					<br />
					<div className="form-group">
						<button className="btn btn-dark btn-block" disabled={loading}>
							{loading && <span className="spinner-border spinner-border-sm"></span>}
							<span className="btn btn-dark btn-block">Login</span>
						</button>
					</div>
					<br />
					{message && (
						<div className="form-group">
							<div className="alert alert-danger" role="alert">
								{message}
							</div>
						</div>
					)}
					<CheckButton style={{ display: "none" }} ref={checkBtn} />
				</Form>

				<footer>
					<p className="text-white">
						First time?{" "}
						<Link className="text-warning " to="/register">
							Create an account
						</Link>
						.
					</p>
					<p>
						<Link className="text-white" to="/">
							Back to Homepage
						</Link>
						.
					</p>
				</footer>
			</div>
		</div>
	);
};
export default Login;
