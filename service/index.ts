import http from "service/http";

/*
	API calls
*/

export const userSignin = (user) => http.post("signin", user);
