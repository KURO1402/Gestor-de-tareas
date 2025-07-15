import { useTasks } from "../../context/TasksContext";
import { useForm } from "react-hook-form";
import ErrorMessage from "../form/ErrorMessage";
import { useAuth } from "../../context/AuthContext";

const TaskForm = ({ onClose }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { postTask } = useTasks();
  const { user } = useAuth();

  const onSubmit = handleSubmit(async (data) => {
    try {
      await postTask({
        usuario: user?.idUsuario || user?.id,
        descripcion: data.descripcion,
      });
      onClose();
    } catch (error) {
      console.error("Error al crear tarea:", error);
    }
  });

  return (
    <form
      onSubmit={onSubmit}
      className="p-4 backdrop-blur-lg bg-indigo-800/40 rounded-lg border border-indigo-500/30 space-y-3"
    >
      <h3 className="text-white text-lg font-semibold">Nueva Tarea</h3>
      <input
        type="text"
        placeholder="Descripción de la tarea"
        className="w-full px-3 py-2 rounded-lg border border-indigo-400 bg-slate-900 text-white"
        {...register("descripcion", {
          required: "La descripción es requerida",
        })}
        />
      <ErrorMessage error={errors.descripcion}/>
      <div className="flex justify-end space-x-2">
        <button
          type="button"
          onClick={onClose}
          className="px-4 py-2 bg-gray-600/30 text-gray-300 rounded hover:bg-gray-600/50"
        >
          Cancelar
        </button>
        <button
          type="submit"
          className="px-4 py-2 bg-cyan-600/70 text-white rounded hover:bg-cyan-600"
        >
          Guardar
        </button>
      </div>
    </form>
  );
};

export default TaskForm;
