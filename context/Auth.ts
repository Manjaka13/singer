import { createContext } from "react";
import { IUser }from "helpers/interface";

const AuthContext = createContext<IUser | null>(null);

export default AuthContext;