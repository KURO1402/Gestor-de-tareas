import { createContext, useState, useEffect } from "react";
import axios from "../api/auth";
import { useAuth } from "./AuthContext";

export const TasksContext = createContext();

export const TasksProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [totalTask, setTotalTask] = useState([]);
  const [loading, setLoading] = useState(true);

  const { token } = useAuth();

  useEffect(() => {
    if (!token) return;

    const fetchTasks = async () => {
      try {
        const response = await axios.get("/tareas", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setTasks(response.data.tasks || []);
      } catch (error) {
        console.error("Error al cargar tareas:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();
  }, [token]);

  const postTask = async (data) => {
    try {
      const response = await axios.post("/nueva-tarea", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const newTask = {
        idTarea: response.data.newTask.id,
        descripcion: response.data.newTask.descripcion,
        estado: response.data.newTask.estado,
      };
      setTasks((prevTasks) => [...prevTasks, newTask]);
    } catch (error) {
      console.error("Error al crear tarea:", error);
      throw error;
    }
  };

  const updatStatusTask = async (idTarea, nuevoEstado) => {
    try { 
      await axios.put(
        `/tareas/${idTarea}`,
        { estado: nuevoEstado },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setTasks((prev) =>
        prev.map((t) =>
          t.idTarea === idTarea ? { ...t, estado: nuevoEstado } : t
        )
      );
    } catch (error) {
      console.error("Error al actualizar tarea:", error);
      throw error;
    }
  };

  const classifyTask = async () => {
    try {
      const response = await axios.get("/clasificar", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setTotalTask(response.data);
    } catch (error) {
      console.error("Error al mostrar las tareas clasificadas", error);
      throw error;
    }
  };

  return (
    <TasksContext.Provider
      value={{
        tasks,
        loading,
        postTask,
        totalTask,
        classifyTask,
        updatStatusTask,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};
