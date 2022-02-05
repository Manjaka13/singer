import http from "service/http";
import { IUser } from "helpers/interface";

/*
	API calls
*/

export const userSignin = (user: {email: string; password: string}) => http.post("user_signin", user);
export const userList = () => http.get("user_list");
export const userVerify = () => http.get("user_verify");
export const userCreate = (user: IUser) => http.post("user_create", user);
export const userRemove = (email: {email: string}) => http.post("user_remove", email);

export const contactList = () => http.get("contact_list");
export const contactRemove = (email: {email: string}) => http.post("contact_remove", email);