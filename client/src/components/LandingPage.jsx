import React from "react";
import { Link } from "react-router-dom";
import BackgroundImage from "../assets/background.png";

const HeaderStyle = {
	width: "100%",
	height: "100vh",
	background: `url(${BackgroundImage})`,
	backgroundPosition: "center",
	backgroundRepeat: "no-repeat",
	backgroundSize: "cover",
	overflow: "hidden",
};

export default function LandingPage() {
	return (
		<header style={HeaderStyle}>
			<h1 className="main-title text-center text-border margin-top">Pharma Connect</h1>
			<p className="main-para text-center">Connect with an health advisor online</p>
			<div className="buttons text-center">
				<Link to="/login">
					<button className="primary-button">Log In</button>
				</Link>
				<Link to="/register">
					<button className="primary-button" id="reg_btn">
						<span>Sign Up</span>
					</button>
				</Link>
			</div>
		</header>
	);
}
