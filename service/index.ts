import http from "service/http";

/*
	API calls
*/

export const userSignin = (user) => http.post("signin", user);
export const userList = () => http.get("list");
export const userVerify = () => http.get("verify");
