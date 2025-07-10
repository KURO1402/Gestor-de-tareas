import AuthForm from "../../components/AuthForm";

const Register = () => {
  return (
    <AuthForm
      title={"Crea tu cuenta"}
      description={"Comienza a organizar tus tareas en minutos"}
      pregunta={"¿Ya tienes una cuenta?"}
      linkName={"Inicia Sesión"}
    >
      <form className="space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="firstName"
              className="block text-sm font-medium text-cyan-100 mb-2"
            >
              Nombre
            </label>
            <input
              type="text"
              id="firstName"
              className="w-full px-4 py-3 bg-indigo-900/40 border border-indigo-500/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500/50 text-white placeholder-indigo-400/70 transition-all duration-200"
              placeholder="Ej: Juan"
            />
          </div>
          <div>
            <label
              htmlFor="lastName"
              className="block text-sm font-medium text-cyan-100 mb-2"
            >
              Apellido
            </label>
            <input
              type="text"
              id="lastName"
              className="w-full px-4 py-3 bg-indigo-900/40 border border-indigo-500/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500/50 text-white placeholder-indigo-400/70 transition-all duration-200"
              placeholder="Ej: Pérez"
            />
          </div>
        </div>

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
          <label
            htmlFor="password"
            className="block text-sm font-medium text-cyan-100 mb-2"
          >
            Contraseña
          </label>
          <input
            type="password"
            id="password"
            className="w-full px-4 py-3 bg-indigo-900/40 border border-indigo-500/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500/50 text-white placeholder-indigo-400/70 transition-all duration-200"
            placeholder="••••••••"
          />
          <p className="mt-1 text-xs text-indigo-400/60">
            Mínimo 8 caracteres, incluye números y símbolos
          </p>
        </div>

        <div>
          <label
            htmlFor="confirmPassword"
            className="block text-sm font-medium text-cyan-100 mb-2"
          >
            Confirmar Contraseña
          </label>
          <input
            type="password"
            id="confirmPassword"
            className="w-full px-4 py-3 bg-indigo-900/40 border border-indigo-500/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500/50 text-white placeholder-indigo-400/70 transition-all duration-200"
            placeholder="••••••••"
          />
        </div>

        <div className="flex items-start">
          <input
            id="terms"
            type="checkbox"
            className="h-4 w-4 mt-1 rounded border-indigo-300 text-cyan-500 focus:ring-cyan-500/50"
          />
          <label htmlFor="terms" className="ml-2 block text-sm text-indigo-200">
            Acepto los{" "}
            <a href="#" className="text-cyan-400 hover:underline">
              Términos de Servicio
            </a>{" "}
            y la{" "}
            <a href="#" className="text-cyan-400 hover:underline">
              Política de Privacidad
            </a>
          </label>
        </div>

        <button
          type="submit"
          className="w-full py-3.5 px-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold rounded-lg shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all duration-300"
        >
          Registrarse
        </button>
      </form>
    </AuthForm>
  );
};

export default Register;
