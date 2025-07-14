import { createContext, useContext, useEffect, useState } from "react";
import axios from "../api/auth";

const TasksContext = createContext();

export const TasksProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get("/tareas", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
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
  }, []);

  return (
    <TasksContext.Provider
      value={{ tasks, loading }}
    >
      {children}
    </TasksContext.Provider>
  );
};

// Custom hook para usar el contexto
export const useTasks = () => useContext(TasksContext);
