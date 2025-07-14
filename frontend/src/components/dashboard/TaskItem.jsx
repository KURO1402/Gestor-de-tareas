
const TaskItem = ({ task}) => {
  return (
    <div
      className={`p-4 flex items-center transition-colors duration-200 ${
        task.estado === "finalizado"  ? "bg-indigo-900/10" : "hover:bg-indigo-900/20"
      }`}
    >
      <input
        type="checkbox"
        checked={task.estado === "finalizado" ? true : false}
        onChange={handleToggleComplete}
        className="h-5 w-5 rounded border-indigo-300 text-cyan-500 focus:ring-cyan-500/50"
      />
      <div className="ml-3 flex-1">
        <p
          className={`${
            task.estado === "finalizado" ? "text-indigo-400 line-through" : "text-white"
          }`}
        >
          {task.descripcion}
        </p>
      </div>

      <div className="flex space-x-2">
        <button
          className="text-indigo-400 hover:text-yellow-400 transition-colors"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
            />
          </svg>
        </button>
        <button
          className="text-indigo-400 hover:text-red-400 transition-colors"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default TaskItem;

