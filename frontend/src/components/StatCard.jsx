const StatCard = () => {
    return ( 
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl">
          {['Tareas completadas', 'Equipos activos', 'Integraciones', 'Satisfacción'].map((item, index) => (
            <div key={index} className="bg-indigo-900/30 backdrop-blur-sm border border-indigo-500/20 rounded-xl p-6 hover:bg-indigo-800/40 transition-all duration-300">
              <p className="text-3xl font-bold text-cyan-400 mb-2">{Math.floor(Math.random() * 900) + 100}K+</p>
              <p className="text-sm text-indigo-200/80">{item}</p>
            </div>
          ))}
        </div>
     );
}
 
export default StatCard;