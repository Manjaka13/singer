import http from "service/http";
import { IUser } from "helpers/interface";

/*
	API calls
*/

export const userSignin = (user: IUser) => http.post("signin", user);
export const userList = () => http.get("list");
export const userVerify = () => http.get("verify");
export const userCreate = (user: IUser) => http.post("create", user);