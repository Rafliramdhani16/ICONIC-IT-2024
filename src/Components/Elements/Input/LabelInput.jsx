import React from "react";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";

const LabelInput = ({
  type,
  id,
  value,
  onChange,
  error,
  placeholder,
  icon: Icon,
  showPassword,
  togglePasswordVisibility,
}) => {
  const isPasswordField = type === "password";

  return (
    <div className="mb-4">
      <div className="flex items-center border border-neutral-800 rounded-xl px-2 py-1">
        {Icon && <Icon className="text-neutral-800 mx-1" />}
        <input
          required
          autoComplete="off"
          type={isPasswordField && showPassword ? "text" : type}
          id={id}
          name={id}
          value={value}
          onChange={onChange}
          className={`outline-none text-sm flex-1 text-start w-full p-2 rounded-xl ${
            error ? "text-red-500 placeholder-red-500" : "text-gray-800"
          }`}
          placeholder={placeholder}
        />
        {isPasswordField && (
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="focus:outline-none ml-2"
          >
            {showPassword ? (
              <MdVisibility className="text-neutral-800 mr-2" />
            ) : (
              <MdVisibilityOff className="text-neutral-800 mr-2" />
            )}
          </button>
        )}
      </div>
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default LabelInput;
