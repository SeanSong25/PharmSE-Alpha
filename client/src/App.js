import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LandingPage from "./components/LandingPage";
import Login from "./components/Login";
import SignUp from "./components/SignUp";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
	return (
		<Router>
			<div>
				<Routes>
					<Route exact path="/" element={<LandingPage />} />
					<Route exact path="/login" element={<Login />} />
					<Route exact path="/register" element={<SignUp />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
