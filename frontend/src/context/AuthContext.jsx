import { createContext, useContext, useState, useEffect } from "react";
import axios from "../api/auth";
import { jwtDecode } from "jwt-decode";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      if (token) {
        try {
          const decodedToken = jwtDecode(token);
          setUser(decodedToken);
        } catch (error) {
          console.error("Token invalido:", error);
          logout();
        }
      }
      setLoading(false);
    };
    fetchUser();
  }, [token]);

  const registro = async (data) => {
    try {
      const response = await axios.post("/usuarios", data);
      localStorage.setItem("token", response.data.token);
      setToken(response.data.token);
      setUser(response.data.newUser);
    } catch (error) {
      console.error("Error al registrarse:", error);
      throw error;
    }
  };

  const login = async (data) => {
    try {
      const response = await axios.post("/login", data);
      localStorage.setItem("token", response.data.token);
      setToken(response.data.token);
      setUser(response.data.user);
    } catch (error) {
      console.log("Error al iniciar sesión:", error);
      throw error;
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{ user, token, login, logout, loading, registro }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
