import axios from "axios";
import ws from "service/ws";
import { PROXY } from "helpers/const";
import { IProduct } from "helpers/interface";

// Default headers
const headers = {
	Accept: "application/json",
	"Content-Type": "application/json",
};

// Gets
// const get = (endpoint: string): Promise<Array<IProduct>> => {
// 	return new Promise((resolve, reject) => {
// 		axios
// 			.get(
// 				`${
// 					process.env && process.env.NEXT_PUBLIC_MODE === "local" ? "" : PROXY
// 				}/${ws(endpoint)}`,
// 				{headers, params}
// 			)
// 			.then((data) => resolve(data))
// 			.catch((e) => reject(e));
// 	});
// };

// Post
const post = (endpoint: string, params) => {
	let baseUrl = process.env.NEXT_PUBLIC_MODE === "local" ? process.env.NEXT_PUBLIC_ENDPOINT : process.env.NEXT_PUBLIC_PROXY;
	const url = `${baseUrl}/${ws(endpoint)}`
	return (
		axios
			.post(url, params, headers)
			.then(({data}) => data)
	);
};

// The http service for API calls
const http = {
	post
};

export default http;
