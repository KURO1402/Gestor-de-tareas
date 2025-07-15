const SimpleButton = ({value}) => {
  return (
    <button className="px-8 py-3.5 border-2 m-0 border-indigo-400/30 hover:border-cyan-400/50 text-cyan-100 font-semibold rounded-full backdrop-blur-sm hover:bg-indigo-800/20 transition-all duration-300">
      {value}
    </button>
  );
};

export default SimpleButton;
