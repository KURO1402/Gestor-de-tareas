import { useNavigate } from "react-router-dom";

import { useTasks } from "../../context/TasksContext";
import { useAuth } from "../../context/AuthContext";
import ButtonDashboard from "./ButtonDashboard";
import TaskItem from "./TaskItem";
import { useState } from "react";
import TaskForm from "./TaskForm";

const TasksList = () => {
  const { tasks, loading } = useTasks();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  if (loading) {
    return (
      <div className="p-6 text-center text-cyan-300 animate-pulse">
        Cargando tareas...
      </div>
    );
  }

  return (
    <div className="backdrop-blur-lg bg-indigo-900/30 border border-indigo-500/20 rounded-xl overflow-hidden mb-8">
      <div className="p-6 border-b border-indigo-500/20 flex justify-between items-center">
        <h2 className="text-xl font-semibold text-white">Mis Tareas</h2>
        {user && user?.rol == "admin" && (
          <ButtonDashboard
            onClick={() => navigate("/usuarios")}
            title="Gestionar Usuarios"
            icon={
              <svg
                className="w-5 h-5 text-white group-hover:text-white transition-colors"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            }
          />
        )}
        <ButtonDashboard
          onClick={() => setShowModal(!showModal)}
          title={showModal ? "Cerrar Formulario" : "Nueva Tarea"}
          icon={
            showModal ? (
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 4v16m8-8H4"
                />
              </svg>
            )
          }
        />
      </div>
      {showModal && (
        <div className="p-4">
          <TaskForm onClose={() => setShowModal(false)} />
        </div>
      )}

      {tasks.length === 0 ? (
        <div className="p-6 text-center text-indigo-400">
          No tienes tareas asignadas. ¡Crea una nueva tarea para comenzar!
        </div>
      ) : (
        <div className="divide-y divide-indigo-500/20">
          {tasks.map((task) => (
            <TaskItem key={task.idTarea} task={task} />
          ))}
        </div>
      )}
    </div>
  );
};

export default TasksList;
