import { Link } from "react-router-dom";
import ParticlesEffect from "../../components/ParticlesEffect";
import Logo from "../../components/Logo";
import AuthForm from "../../components/AuthForm";

const Login = () => {
  return (
    <AuthForm
      title={"Iniciar Sesión"}
      description={"Gestiona tus tareas como un profesional"}
      pregunta={"¿No tienes una cuenta?"}
      linkName={"Regístrate"}
    >
      <form className="space-y-6">
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-cyan-100 mb-2"
          >
            Correo Electrónico
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-4 py-3 bg-indigo-900/40 border border-indigo-500/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500/50 text-white placeholder-indigo-400/70 transition-all duration-200"
            placeholder="tu@email.com"
          />
        </div>

        <div>
          <div className="flex justify-between items-center mb-2">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-cyan-100"
            >
              Contraseña
            </label>
            <Link
              to="/forgot-password"
              className="text-xs text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              ¿Olvidaste tu contraseña?
            </Link>
          </div>
          <input
            type="password"
            id="password"
            className="w-full px-4 py-3 bg-indigo-900/40 border border-indigo-500/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500/50 text-white placeholder-indigo-400/70 transition-all duration-200"
            placeholder="••••••••"
          />
        </div>

        <button
          type="submit"
          className="w-full py-3.5 px-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold rounded-lg shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all duration-300"
        >
          Ingresar
        </button>
      </form>
    </AuthForm>
  );
};

export default Login;
