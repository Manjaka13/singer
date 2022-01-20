import axios from "axios";
import ws from "./ws";

// Default headers
const headers = {
	Accept: "application/json",
	"Content-Type": "application/json",
};

// Gets
const get = (endpoint) => {
	return new Promise((resolve, reject) => {
		axios
			.get(
				`${process.env.MODE === "local" ? "" : process.env.BASE_URL}/${ws[endpoint]}`,
				{
					headers,
				}
			)
			.then(({ data }) => resolve(data.data))
			.catch((e) => reject(e));
	});
};

// The http service for API calls
const http = {
	get,
};

export default http;
