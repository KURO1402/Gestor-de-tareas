const CardDashboard = ({ title, number, color, description }) => {
  const className =
    color === "green"
      ? "text-sm text-green-400"
      : color === "red"
      ? "text-sm text-red-400"
      : "text-sm text-cyan-400";
  return (
    <div className="backdrop-blur-lg bg-indigo-900/30 border border-indigo-500/20 rounded-xl p-6 hover:bg-indigo-800/40 transition-all duration-300">
      <p className="text-sm text-indigo-300/80 mb-1">{title}</p>
      <div className="flex items-end justify-between">
        <p className="text-2xl font-bold text-white">{number}</p>
        <span className={className}>{description}</span>
      </div>
    </div>
  );
};

export default CardDashboard;
