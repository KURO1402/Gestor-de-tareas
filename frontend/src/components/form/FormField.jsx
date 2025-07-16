import ErrorMessage from "./ErrorMessage";

const FormField = ({
  label,
  id,
  type,
  placeholder,
  register,
  validation,
  error,
}) => {

  return (
    <>
      <div>
        <label
          htmlFor={id}
          className="block text-sm font-medium text-cyan-100 mb-2"
        >
          {label}
        </label>
        <input
          type={type}
          id={id}
          className="w-full px-4 py-3 bg-indigo-900/40 border border-indigo-500/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500/50 text-white placeholder-indigo-400/70 transition-all duration-200"
          placeholder={placeholder}
          {...register(id, validation)}
        />
        <ErrorMessage error={error} />
      </div>
    </>
  );
};

export default FormField;
