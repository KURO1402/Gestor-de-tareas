import { useContext } from "react";
import { TasksContext } from "./TasksContext";
export const useTasks = () => useContext(TasksContext);