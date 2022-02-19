import axios from "axios";
import { ILogin, IAPIFail } from "helpers/interface";
import { BASE_URL } from "helpers/const";

/*
	Export API calls from here
*/

const headers = {
	"Accept": "application/json",
	"Content-Type": "application/json",
};

// Sign in user

export const signin = (user: ILogin): Promise<ILogin | IAPIFail> => (
	new Promise<ILogin | IAPIFail>((resolve, reject) => {
		axios
			.post(`${BASE_URL}/user/sign`, { ...user }, { headers })
			.then(({ data }) => resolve(data))
			.catch((e) => reject(e));
	})
);