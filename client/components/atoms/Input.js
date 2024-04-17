export const Input = ({ label, id, type, placeholder, value, onChange, className }) => {
  return (
    <div className="flex flex-col gap-1 w-full">
      <label htmlFor={id} className="font-sans font-semibold text-2xl">
        {label}
      </label>
      <input
        required
        type={type}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        autoComplete={
          type === "password"
            ? "current-password"
            : type === "email"
            ? "email"
            : "off"
        }
        className={`font-sans text-2xl bg-transparent border-2 rounded-full pl-6 ${className}`}
      />
    </div>
  );
};
