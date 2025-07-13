import { useForm } from "react-hook-form";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

import AuthForm from "../../components/AuthForm";
import FormField from "../../components/form/FormField.jsx";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { login } = useAuth();
  const navigate = useNavigate();

  const onSubmit = handleSubmit( async (data) => {
    try {
      await login({
        correo: data.email,
        password: data.password,
      });
      navigate("/dashboard");
    } catch (error) {
      alert("Error al iniciar sesión. Por favor, verifica tus credenciales.");
    }
  });

  return (
    <AuthForm
      title={"Iniciar Sesión"}
      description={"Gestiona tus tareas como un profesional"}
      pregunta={"¿No tienes una cuenta?"}
      linkName={"Regístrate"}
    >
      <form onSubmit={onSubmit} className="space-y-6">
        <div>
          <FormField
            label="Correo Electrónico"
            id="email"
            type="email"
            placeholder="tu@email.com"
            register={register}
            validation={{
              required: "Correo es requerido",
              pattern: {
                value: /^[a-z0-9._%+-]+@[a-z0-9-]+\.[a-z]{2,4}$/,
                message: "Correo no válido",
              },
            }}
            error={errors.email}
          />
        </div>

        <div>
          <FormField
            label="Contraseña"
            id="password"
            type="password"
            register={register}
            validation={{
              required: "Contraseña es requerida",
            }}
            error={errors.password}
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
