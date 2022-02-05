import http from "service/http";
import { IUser } from "helpers/interface";

/*
	API calls
*/

export const userSignin = (user: {email: string; password: string}) => http.post("signin", user);
export const userList = () => http.get("list");
export const userVerify = () => http.get("verify");
export const userCreate = (user: IUser) => http.post("create", user);
export const userRemove = (email: {email: string}) => http.post("remove", email);