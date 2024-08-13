import React from "react";

const ButtonLog = ({ label, isSubmitting }) => {
  return (
    <button
      type="submit"
      className="w-full bg-blue-600 text-white py-2 rounded-lg mt-4"
      disabled={isSubmitting}
    >
      {label}
      <span className="ml-2">{isSubmitting ? "Loading..." : ""}</span>
    </button>
  );
};

export default ButtonLog;
