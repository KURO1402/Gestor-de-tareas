import { Link } from "react-router-dom";
import GradientButton from "../components/GradientButton";
import NavBar from "../components/NavBar";
import ParticlesEffect from "../components/ParticlesEffect";
import StatCard from "../components/StatCard";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">

      <NavBar />

      <div className="container mx-auto px-6 pt-32 pb-20">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">Revoluciona</span> tu productividad
          </h1>
          
          <p className="text-lg text-indigo-100/90 mb-10 leading-relaxed">
            TaskFlow combina funcionalidad y diseño intuitivo para ofrecerte la mejor experiencia de gestión de tareas. 
            <span className="block mt-2 text-cyan-200 font-medium">Más de 500,000 equipos confían en nosotros.</span>
          </p>

          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
            <Link to={"/login"}>
              <GradientButton value={"Comenzar Ahora"}/>
            </Link>
          </div>
        </div>

        {/* Importar las tarjetas */}
        <StatCard />

      </div>

      {/* Aplicar el efecto de particulas */}
      <ParticlesEffect />
    </div>
  );
};

export default Home;