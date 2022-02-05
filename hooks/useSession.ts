import { useState, useEffect } from "react";
import { userVerify } from "service/";
import { IUser } from "helpers/interface";
import { IUseSession } from "helpers/type"

/*
	Hook
	Uses current token to return associated user
*/

const useSession = (data?: IUser | null): IUseSession => {
	const [user, setUser] = useState<IUser | null>(null);
	const [ready, setReady] = useState<boolean>(false);

	useEffect(() => {
		if(typeof data === "undefined")
			userVerify()
				.then(({payload, status}: {payload: IUser | null, status: number}) => {
					if(status === 1)
						setUser(payload);
				})
				.catch(e => console.error(e))
				.finally(() => setReady(true));
		else if(data)
			setUser(data);
		else if(!data)
			setUser(null);
	}, [setUser]);

	return [user, setUser, ready];
};

export default useSession;