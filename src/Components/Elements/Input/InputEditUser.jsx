export const InputField = ({
  label,
  name,
  type = "text",
  value,
  onChange,
  placeholder,
}) => {
  return (
    <div className="mb-4">
      <label
        className="block text-neutral-800 text-sm font-bold mb-2"
        htmlFor={name}
      >
        {label}
      </label>
      <input
        id={name}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
      />
    </div>
  );
};
