import { createContext, useContext, useEffect, useState } from "react";
import axiosInstance from "../api/axiosInstance";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [role, setRole] = useState(null)
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axiosInstance
      .get("/api/members/me")
      .then((res) => {
        setUser(res.data.username);
        setRole(res.data.role)
    
      })
      .catch(() => {
        setUser(null);
      })
      .finally(() => {
        setLoading(false)
      }
        );
  }, []);

  const isLoggedIn = !!user;

  return (
    <AuthContext.Provider value={{ user, role, isLoggedIn, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
