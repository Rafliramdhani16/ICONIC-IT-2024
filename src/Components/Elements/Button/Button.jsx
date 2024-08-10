import React from "react";

const Button = ({ children, className, onClick, ...props }) => {
  const baseClass = "px-5 py-2 rounded-lg";

  const combinedClass = `${baseClass} ${className}`;
  return (
    <button className={combinedClass} onClick={onClick} {...props}>
      {children}
    </button>
  );
};

export default Button;
