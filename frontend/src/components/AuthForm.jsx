import { Link } from "react-router-dom";
import Logo from "./Logo";
import ParticlesEffect from "./ParticlesEffect";

const AuthForm = ({ title, description, pregunta, linkName, children }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 flex items-center justify-center p-6 relative overflow-hidden">
      {/* Efecto de partículas */}
      <ParticlesEffect />

      <div className="w-full max-w-md backdrop-blur-lg bg-indigo-900/30 border border-indigo-500/20 rounded-2xl p-8 shadow-2xl shadow-cyan-500/10 z-10">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <Logo />
        </div>

        {/* Título */}
        <h2 className="text-3xl font-bold text-white text-center mb-2">
          {title}
        </h2>
        <p className="text-center text-indigo-200/80 mb-8">
          {description}
        </p>

        {/* Formulario */}
        <div>
            <form className="space-y-6">
                {children}
            </form>
        </div>
        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-grow border-t border-indigo-500/30"></div>
          <span className="mx-4 text-sm text-indigo-300/60">o</span>
          <div className="flex-grow border-t border-indigo-500/30"></div>
        </div>

        {/* Enlace a Registro */}
        <div className="mt-6 text-center text-sm text-indigo-300/80">
          {pregunta}{" "}
          <Link
            {... linkName === "Regístrate" ? {to: "/register"} : {to: "/login"}}
            className="text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
          >
            {linkName}
          </Link>
        </div>
      </div>

      {/* Estilos para animaciones (agregar en tu CSS global) */}
    </div>
  );
};

export default AuthForm;
