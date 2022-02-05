import axios from "axios";
import ws from "service/ws";
import { PROXY, MODE, ENDPOINT } from "helpers/const";
import { IUser } from "helpers/interface";

/*
	For doing API calls
*/

let headers = {
	"Accept": "application/json",
	"Content-Type": "application/json",
};
const baseUrl = MODE === "local" ? ENDPOINT : PROXY;

// Get request
const get = (endpoint: string, params?: any) => {
	const url = `${baseUrl}/${ws(endpoint)}`;
	// Attach token
	const token: string | null = sessionStorage.getItem("token");
	if(token)
		headers["Authorization"] = `Bearer ${token}`;
	// Request
	return (
		axios
			.get(url, {headers, params})
			.then(({data}) => data)
	);
};

// Post request
const post = (endpoint: string, params?: any) => {
	const url = `${baseUrl}/${ws(endpoint)}`;
	// Attach token
	const token: string | null = sessionStorage.getItem("token");
	if(token)
		headers["Authorization"] = `Bearer ${token}`;
	// Request
	return (
		axios
			.post(url, params, {headers})
			.then(({data}) => data)
	);
};

// The http service for API calls
const http = {
	post,
	get
};

export default http;
