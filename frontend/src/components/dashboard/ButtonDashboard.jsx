const ButtonDashboard = ({ title, icon, onClick }) => {
  return (
    <button
      onClick={onClick}
      type="button"
      className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white px-4 py-2 rounded-lg shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all duration-300 flex items-center space-x-2"
    >
      {icon}
      <span>{title}</span>
    </button>
  );
};

export default ButtonDashboard;
