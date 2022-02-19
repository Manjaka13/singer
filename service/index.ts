import axios from "axios";
import { ILogin, IAPIFail } from "helpers/interface";
import { BASE_URL } from "helpers/const";

/*
	Export API calls from here
*/

const getHeaders = () => {
	let headers = {
		"Accept": "application/json",
		"Content-Type": "application/json",
	};
	const token: string | null = sessionStorage.getItem("token");
	if(token)
		headers["Authorization"] = `Bearer ${token}`;
	return headers;
};

// Verify user
export const userVerify = (user: ILogin): Promise<ILogin | IAPIFail> => (
	new Promise<ILogin | IAPIFail>((resolve, reject) => {
		axios
			.get(`${BASE_URL}/user/verify`, { headers: getHeaders() })
			.then(({ data }) => resolve(data))
			.catch((e) => reject(e));
	})
);

// Sign in user
export const userSignin = (user: ILogin): Promise<ILogin | IAPIFail> => (
	new Promise<ILogin | IAPIFail>((resolve, reject) => {
		axios
			.post(`${BASE_URL}/user/sign`, { ...user }, { headers: getHeaders() })
			.then(({ data }) => resolve(data))
			.catch((e) => reject(e));
	})
);