import { User, getAuth, onAuthStateChanged } from "firebase/auth";
import React, { useState, useEffect } from "react";
import AuthContext from "./auth-context";
import { getCurrentUser } from "../firebase/auth";
const auth = getAuth();
export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
    getCurrentUser().then((user) => {
      setUser(user);
    });
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};
