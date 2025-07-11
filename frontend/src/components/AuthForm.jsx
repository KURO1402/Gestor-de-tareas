import { Link } from "react-router-dom";
import Logo from "./Logo";
import ParticlesEffect from "./ParticlesEffect";
import SimpleButton from "./SimpleButton";

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
        <p className="text-center text-indigo-200/80 mb-8">{description}</p>

        {/* Formulario */}
        <div className="space-y-6">
          {children}
        </div>

        {/* Enlace a Registro */}
        <div className="mt-6 grid grid-cols-4 items-center gap-2 text-sm text-indigo-300/80">
          <span className="col-span-1">{pregunta}</span>
          <Link
            className="text-cyan-400 col-span-2 ml-2 hover:text-cyan-300 font-medium transition-colors"
            {...(linkName === "Regístrate"
              ? { to: "/register" }
              : { to: "/login" })}
          >
            {linkName}
          </Link>
          <Link to="/" className="col-span-1 flex justify-end">
            <SimpleButton value={"Volver"} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
