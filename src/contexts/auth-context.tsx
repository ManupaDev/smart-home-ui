import { User } from "firebase/auth";
import { createContext } from "react";
const AuthContext = createContext<{ user: User | null }>({ user: null });
export default AuthContext;
