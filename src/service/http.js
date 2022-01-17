import axios from "axios";
import ws from "./ws";

// Default headers
const headers = {
	Accept: "application/json",
	"Content-Type": "application/json",
};

// Gets
const get = (endpoint = "8c73e05d-849e-45da-b7d7-5af81bc79f63") => {
	return new Promise((resolve, reject) => {
		axios
			.get(
				`${process.env.BASE_URL || "https://run.mocky.io/v3"}/${ws[endpoint]}`,
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
