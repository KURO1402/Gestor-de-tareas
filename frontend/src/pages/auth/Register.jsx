import AuthForm from "../../components/AuthForm.jsx";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import ErrorMessage from "../../components/form/ErrorMessage.jsx";
import FormField from "../../components/form/FormField.jsx";
import { useAuth } from "../../context/AuthContext.jsx";

const Register = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const { registro } = useAuth();

  const onSubmit = handleSubmit( async (data) => {
    try {
      await registro({
        nombres: data.name,
        apellidos: data.lastName,
        correo: data.email,
        password: data.password,
      });
      navigate("/dashboard");
    } catch (error) {
      console.error("Error al registrarse:", error);
      alert("Error al registrarse. Por favor, verifica los datos ingresados.");
    }
  });
  return (
    <AuthForm
      title={"Crea tu cuenta"}
      description={"Comienza a organizar tus tareas en minutos"}
      pregunta={"¿Ya tienes una cuenta?"}
      linkName={"Inicia Sesión"}
    >
      <form onSubmit={onSubmit} className="space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            label="Nombre"
            id="name"
            placeholder="Ej: Juan"
            register={register}
            validation={{
              required: "Nombre es requerido",
              minLength: { value: 2, message: "Mínimo 2 caracteres" },
              maxLength: { value: 20, message: "Máximo 20 caracteres" },
            }}
            error={errors.name}
          />

          <div>
            <FormField
              label="Apellido"
              id="lastName"
              placeholder="Ej: Pérez"
              register={register}
              validation={{
                required: "Apellido es requerido",
                minLength: { value: 2, message: "Mínimo 2 caracteres" },
                maxLength: { value: 50, message: "Máximo 50 caracteres" },
              }}
              error={errors.lastName}
            />
          </div>
        </div>

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
              minLength: {
                value: 6,
                message: "Mínimo 6 caracteres",
              },
            }}
            error={errors.password}
          />
        </div>

        <div>
          <FormField
            label="Confirmar Contraseña"
            id="confirmPassword"
            type="password"
            register={register}
            validation={{
              required: "Confirmación requerida",
              validate: (value) =>
                value === watch("password") || "Las contraseñas no coinciden",
            }}
            error={errors.confirmPassword}
          />
        </div>

        <div className="flex items-start">
          <input
            id="terms"
            type="checkbox"
            defaultChecked={false}
            className="h-4 w-4 mt-1 rounded border-indigo-300 text-cyan-500 focus:ring-cyan-500/50"
            {...register("terms", {
              required: {
                value: true,
                message: "Debes aceptar los términos y condiciones",
              },
            })}
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
        <ErrorMessage error={errors.terms} />

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
