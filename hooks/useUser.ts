import { useState, useEffect } from "react";
import { IUser } from "helpers/interface";
import Session from "helpers/session";

/*
	Hook for getting user from session
*/

const useUser = (): IUser | null => {
	const [user, setUser] = useState<IUser | null>(null);

	useEffect(() => {
		const sessionUser: IUser | null = Session.get("user");
		if(sessionUser)
			setUser(sessionUser);
	}, []);

	return user;
};

export default useUser;