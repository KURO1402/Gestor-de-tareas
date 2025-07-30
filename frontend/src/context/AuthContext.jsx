import { createContext, useContext, useState, useEffect } from "react";
import axios from "../api/auth";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      if (token) {
        const userData = JSON.parse(localStorage.getItem("user"));
        if (userData) {
          setUser(userData);
        } else {
          logout();
        }
      }
      setLoading(false);
    };
    fetchUser();
  }, [token]);

  const registro = async (data) => {
    try {
      const response = await axios.post("/registro", data);
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.newUser));
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
      localStorage.setItem("user", JSON.stringify(response.data.user));
      setToken(response.data.token);
      setUser(response.data.user);
    } catch (error) {
      console.log("Error al iniciar sesión:", error);
      throw error;
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setToken(null);
    setUser(null);
  };

  const fetchUsers = async () => {
    try {
      const response = await axios.get("/usuarios", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      console.error("Error al obtener usuarios:", error);
      throw error;
    }
  };

  const updateUserRole = async (data) => {
    try {
      await axios.post("/ascender", 
        data, {
          headers: {
            Authorization: `Bearer ${token}`,
          }
        })
    } catch (error) {
      console.error("Error al cambiar rol del usuario: ", error.message);
      throw error; 
    }
  }

  const deleteUser = async (data) => {
  try {
    const token = localStorage.getItem("token");

    const response = await axios.post("http://localhost:3005/api/eliminar", data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    setUser(response.data);
  } catch (error) {
    console.error("Error al eliminar usuario:", error.response?.data || error.message);
    throw error;
  }
};



  return (
    <AuthContext.Provider
      value={{ user, token, login, logout, loading, registro, fetchUsers, deleteUser, updateUserRole }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
