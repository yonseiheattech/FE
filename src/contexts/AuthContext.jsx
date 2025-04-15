import { createContext, useContext, useEffect, useState } from "react";
import axiosInstance from "../api/axiosInstance";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axiosInstance
      .get("/api/members/me")
      .then((res) => {
        console.log("나는 AuthContext", res.data)
        setUser(res.data);
      })
      .catch(() => {
        console.log("skrrr1")
        setUser(null);
      })
      .finally(() => {
        console.log("skrrr2")
        setLoading(false)
      }
        );
  }, []);

  const isLoggedIn = !!user;

  return (
    <AuthContext.Provider value={{ user, isLoggedIn, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
