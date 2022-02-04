import axios, { AxiosRequestConfig } from "axios";
import ws from "service/ws";
import { PROXY, MODE, ENDPOINT } from "helpers/const";
import Session from "helpers/session";
import { IUser } from "helpers/interface";

// Gets
// const get = (endpoint: string): Promise<Array<IProduct>> => {
// 	return new Promise((resolve, reject) => {
// 		axios
// 			.get(
// 				`${
// 					process.env && MODE === "local" ? "" : PROXY
// 				}/${ws(endpoint)}`,
// 				{headers, params}
// 			)
// 			.then((data) => resolve(data))
// 			.catch((e) => reject(e));
// 	});
// };

// Post
const post = (endpoint: string, params) => {
	const baseUrl = MODE === "local" ? ENDPOINT : PROXY;
	const url = `${baseUrl}/${ws(endpoint)}`;
	const user: IUser | null = Session.get("user");
	let headers = {
		"Accept": "application/json",
		"Content-Type": "application/json",
	};
	if(user)
		headers["Authorization"] = `Bearer ${user.token}`;
	return (
		axios
			.post(url, params, {headers})
			.then(({data}) => data)
	);
};

// The http service for API calls
const http = {
	post
};

export default http;
