import { IUser } from "helpers/interface";

/*
	Export types
*/

export type IUseUserList = [Array<IUser>, string | null];
export type IUseSession = [IUser | null, any, boolean];