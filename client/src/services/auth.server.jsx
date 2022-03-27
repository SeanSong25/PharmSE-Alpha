import React from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { getNextPageRecData } from "../redux/actions/feed";

const API_URL = "http://localhost:3003/";

const updateLocalStorage = (response) => {
	if (response.data.accessToken) {
		localStorage.setItem("accessToken", JSON.stringify(response.data.accessToken));
		localStorage.setItem("authorId", JSON.stringify(response.data.authorId));
		localStorage.setItem("username", JSON.stringify(response.data.username));
		localStorage.setItem("email", JSON.stringify(response.data.email));
		localStorage.setItem("role", JSON.stringify(response.data.role));
	}
};

class AuthServer {
	login(username, password) {
		return axios
			.post(API_URL + "login", {
				username,
				password,
			})
			.then((response) => {
				if (response.data.accessToken) {
					updateLocalStorage(response);
				}
				return response.data;
			});
	}
	logout() {
		localStorage.removeItem("user");
	}
	register(username, email, password, role) {
		const authorId = uuidv4();
		return axios.post(API_URL + "register", {
			username,
			email,
			password,
			role,
			authorId,
		});
	}
	getCurrentUser() {
		return JSON.parse(localStorage.getItem("user"));
	}
}

export default new AuthServer();
