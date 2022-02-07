import axios from "axios";
import ws from "service/ws";
import { BASE_URL } from "helpers/const";

/*
	For doing API calls
*/

const headers = {
	"Accept": "application/json",
	"Content-Type": "application/json",
};

// Get request
const get = (endpoint: string, params?: any) => {
	const url = `${BASE_URL}/${ws(endpoint)}`;
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
	const url = `${BASE_URL}/${ws(endpoint)}`;
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

// Delete request
const remove = (endpoint: string, params?: any) => {
	const url = `${BASE_URL}/${ws(endpoint)}`;
	// Attach token
	const token: string | null = sessionStorage.getItem("token");
	if(token)
		headers["Authorization"] = `Bearer ${token}`;
	// Request
	return (
		axios
			.delete(url, {headers, params})
			.then(({data}) => data)
	);
};

// The http service for API calls
const http = {
	post,
	get,
	delete: remove
};

export default http;
