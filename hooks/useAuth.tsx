import React, {
	useState,
	useEffect,
	useMemo,
	useContext,
	createContext,
	ReactNode
} from "react";
import Router from "next/router";
import { IUser, IAuthContext } from "helpers/interface";
import { userSignin, userVerify } from "service/";

/*
	Authentication hook and context
*/

// Setup context
const AuthContext = createContext<IAuthContext>({} as IAuthContext);

// Setup provider wrapper
const AuthProvider = (
	{children}: {children?: ReactNode;}
): JSX.Element => {
	const [user, setUser] = useState<IUser | null>(null);
	const [ready, setReady] = useState<boolean>(false);
	const [error, setError] = useState<string | null>(null);
	const [loading, setLoading] = useState<boolean>(false);

	// Get user indentity
	useEffect(() => {
		userVerify()
			.then(({payload, status}: {payload: IUser | null, status: number}) => {
				if(status === 1)
					setUser(payload);
			})
			.catch(e => console.error(e))
			.finally(() => setReady(true));
	}, []);

	// console.log(user);

	// Login
	const login = (email: string, password: string): void => {
		setLoading(true);
		userSignin({email, password})
			.then(({payload, status, caption}:
				{payload?: IUser | null; status: number; caption: string;}
			) => {
				if(status === 1 && payload && typeof payload.token === "string") {
					sessionStorage.setItem("token", payload.token);
					delete payload.token;
					setUser(payload);
					if(error)
						setError(null);
				}
				else setError(caption);
			})
			.catch(e => setError(e))
			.finally(() => setLoading(false));
	};

	// Logout
	const logout = (): void => {
		sessionStorage.removeItem("token");
		if(user)
			setUser(null);
		Router.push("/login");
	};

	// Memoize values to prevent futile re-renders
	const memoizedValues = useMemo(() => ({
		user, loading, error, login, logout
	}), [user, loading, error]);

	return (
		<AuthContext.Provider value={memoizedValues}>
			{ready && children}
		</AuthContext.Provider>
	);
};

const useAuth = () => useContext(AuthContext);

export {
	useAuth,
	AuthProvider
};