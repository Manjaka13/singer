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
const get = (endpoint: string): Promise<Array<IProduct>> => {
	return new Promise((resolve, reject) => {
		axios
			.get(`${process.env.MODE === "local" ? "" : PROXY}/${ws(endpoint)}`, {
				headers,
			})
			.then(({ data }) => resolve(data.data))
			.catch((e) => reject(e));
	});
};

// The http service for API calls
const http = {
	get,
};

export default http;
