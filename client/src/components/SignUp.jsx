import React, { useState, useRef, useEffect } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { Link, useNavigate } from "react-router-dom";
import { isEmail } from "validator";
import AuthService from "../services/auth.server";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

const required = (value) => {
	if (!value) {
		return (
			<div className="alert alert-danger" role="alert">
				This field is required!
			</div>
		);
	}
};
const validEmail = (value) => {
	if (!isEmail(value)) {
		return (
			<div className="alert alert-danger" role="alert">
				This is not a valid email.
			</div>
		);
	}
};
const vusername = (value) => {
	if (value.length < 3 || value.length > 20) {
		return (
			<div className="alert alert-danger" role="alert">
				The username must be between 3 and 20 characters.
			</div>
		);
	}
};
const vpassword = (value) => {
	if (value.length < 6 || value.length > 40) {
		return (
			<div className="alert alert-danger" role="alert">
				The password must be between 6 and 40 characters.
			</div>
		);
	}
};

const Register = (props) => {
	const form = useRef();
	const checkBtn = useRef();
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [successful, setSuccessful] = useState(false);
	const [message, setMessage] = useState("");
	const [role, setRole] = useState("");
	const onChangeUsername = (e) => {
		const username = e.target.value;
		setUsername(username);
	};
	const onChangeEmail = (e) => {
		const email = e.target.value;
		setEmail(email);
	};
	const onChangePassword = (e) => {
		const password = e.target.value;
		setPassword(password);
	};
	const onChangeRole = (e) => {
		const role = e.target.value;
		setRole(role);
	};

	// Redirect
	let navigate = useNavigate();
	useEffect(() => {
		if (successful) {
			return navigate("/feed");
		}
	}, [successful]);

	const handleRegister = (e) => {
		e.preventDefault();
		setMessage("");
		setSuccessful(false);
		form.current.validateAll();
		if (checkBtn.current.context._errors.length === 0) {
			AuthService.register(username, email, password, role).then(
				(response) => {
					localStorage.setItem("accessToken", JSON.stringify(response.data.accessToken));
					localStorage.setItem("authorId", JSON.stringify(response.data.authorId));
					localStorage.setItem("username", JSON.stringify(response.data.username));
					localStorage.setItem("email", JSON.stringify(response.data.email));
					localStorage.setItem("role", JSON.stringify(response.data.role));
					setMessage(response.data.message);
					setSuccessful(true);
				},
				(error) => {
					const resMessage =
						(error.response && error.response.data && error.response.data.message) ||
						error.message ||
						error.toString();
					setMessage(resMessage);
					setSuccessful(false);
				}
			);
		}
	};
	return (
		<div className="text-center m-5-auto vh-100 background-blurImg">
			<div className="center-screen background-form">
				<h2 className="text-white">Join us!</h2>
				<h5 className="text-white">Create a account</h5>
				<Form className="col-md-4 form " onSubmit={handleRegister} ref={form}>
					{!successful && (
						<div>
							<div className="form-group mb-3">
								<label htmlFor="username">Username</label>
								<Input
									type="text"
									className="form-control"
									name="username"
									value={username}
									onChange={onChangeUsername}
									validations={[required, vusername]}
								/>
							</div>
							<div className="form-group mb-3">
								<label htmlFor="email">Email</label>
								<Input
									type="text"
									className="form-control"
									name="email"
									value={email}
									onChange={onChangeEmail}
									validations={[required, validEmail]}
								/>
							</div>
							<div className="form-group mb-4">
								<label htmlFor="password">Password</label>
								<Input
									type="password"
									className="form-control"
									name="password"
									value={password}
									onChange={onChangePassword}
									validations={[required, vpassword]}
								/>
							</div>
							<div className="form-group mb-3">
								<FormControl fullWidth sx={{ height: 60 }}>
									<InputLabel id="demo-simple-select-label">Role</InputLabel>
									<Select
										labelId="demo-simple-select-label"
										id="demo-simple-select"
										value={role}
										label="Role"
										onChange={onChangeRole}>
										<MenuItem value={"Patient"}>Patient</MenuItem>
										<MenuItem value={"Doctor"}>Doctor</MenuItem>
									</Select>
								</FormControl>
							</div>
							{role === "Doctor" && (
								<div className="form-group mb-3">
									<label className="text-center">
										Please update your qualification
									</label>
									<br />
									<Stack direction="row" alignItems="center" spacing={2}>
										<label htmlFor="contained-button-file">
											<Input
												id="contained-button-file"
												type="file"
												style={{ display: "None" }}
											/>
											<Button
												variant="contained"
												component="span"
												style={{ paddingLeft: "20px" }}>
												Upload
											</Button>
										</label>
									</Stack>
								</div>
							)}
							<div className="form-group mb-3">
								<button
									className="btn btn-dark btn-block"
									style={{ width: "100%", padding: "10px" }}>
									Sign Up
								</button>
							</div>
						</div>
					)}
					{message && (
						<div className="form-group mb-3">
							<div
								className={
									successful ? "alert alert-success" : "alert alert-danger"
								}
								role="alert">
								{message}
							</div>
						</div>
					)}
					<CheckButton style={{ display: "none" }} ref={checkBtn} />
				</Form>
				<footer>
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
export default Register;
