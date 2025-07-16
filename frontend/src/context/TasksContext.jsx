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

  const postTask = async (data) => {
    try {
      const response = await axios.post("/nueva-tarea", data, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
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

  return (
    <TasksContext.Provider value={{ tasks, loading, postTask }}>
      {children}
    </TasksContext.Provider>
  );
};

export const useTasks = () => useContext(TasksContext);
