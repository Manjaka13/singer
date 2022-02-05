import { useState, useEffect } from "react";
import { IUser } from "helpers/interface";
import { IUseUserList } from "helpers/type";
import { userList } from "service/";

const useUserList = (): IUseUserList => {
	const [error, setError] = useState<string | null>(null);
	const [users, setUsers] = useState<Array<IUser>>([]);

	useEffect(() => {
		setTimeout(() => {
		userList()
			.then(data => {
				if(data.status === 1 && data.payload) {
					setUsers(data.payload);
					setError(null);
				}
				else
					setError(data.caption);
			})
			.catch(e => {
				setError("Impossible de faire la requête.");
			});
		}, 3000);
	}, []);

	return [users, error];
};

export default useUserList;