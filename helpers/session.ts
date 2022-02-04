import { IUser } from "helpers/interface";

/*
	Manipulate sessions
*/

const Session = {
	set: (key: string, value: IUser): void => {
		sessionStorage.setItem(key, JSON.stringify(value));
	},
	get: (key: string): IUser | null => {
		const itemStr: string | null = sessionStorage.getItem(key)
		if(itemStr)
			return JSON.parse(itemStr);
		return null;
	},
	remove: (key: string): void => sessionStorage.removeItem(key),
	clear: (): void => sessionStorage.clear()
};

export default Session;