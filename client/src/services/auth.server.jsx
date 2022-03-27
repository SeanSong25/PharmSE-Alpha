import React from "react";
import axios from "axios";
const API_URL = "http://localhost:3003/";

class AuthServer {
	login(username, password) {
		return axios
			.post(API_URL + "signin", {
				username,
				password,
			})
			.then((response) => {
				if (response.data.accessToken) {
					localStorage.setItem("user", JSON.stringify(response.data));
				}
				return response.data;
			});
	}
	logout() {
		localStorage.removeItem("user");
	}
	register(username, email, password, role) {
		return axios.post(API_URL + "register", {
			username,
			email,
			password,
			role,
		});
	}
	getCurrentUser() {
		return JSON.parse(localStorage.getItem("user"));
	}
}

export default new AuthServer();
