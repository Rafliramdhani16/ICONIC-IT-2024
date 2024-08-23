import React, { useEffect, useState } from "react";
import { FaCheckCircle, FaTimesCircle, FaSpinner } from "react-icons/fa";

const Modal = ({ isVisible, onClose, message, type = "info" }) => {
  const [isRendered, setIsRendered] = useState(false);

  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = "hidden";
      setTimeout(() => setIsRendered(true), 10);
    } else {
      document.body.style.overflow = "unset";
      setIsRendered(false);
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isVisible]);

  if (!isVisible) return null;

  const getIcon = () => {
    switch (type) {
      case "success":
        return <FaCheckCircle className="text-green-500 w-10 h-10" />;
      case "error":
        return <FaTimesCircle className="text-red-500 w-10 h-10" />;
      case "info":
      default:
        return <FaSpinner className="text-blue-500 w-10 h-10 animate-spin" />;
    }
  };

  const getColor = () => {
    switch (type) {
      case "success":
        return "text-green-600";
      case "error":
        return "text-red-600";
      case "info":
      default:
        return "text-blue-600";
    }
  };

  const getColors = () => {
    switch (type) {
      case "success":
        return "border-green-600";
      case "error":
        return "border-red-600";
      case "info":
      default:
        return "border-blue-600";
    }
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center transition-all duration-300 ease-in-out  ${
        isRendered ? "bg-black bg-opacity-50 backdrop-blur-sm" : "bg-opacity-0"
      }`}
    >
      <div
        className={`bg-white rounded-lg shadow-xl p-6 m-4 max-w-sm w-full transform transition-all duration-300  ${
          isRendered ? "scale-100 opacity-100" : "scale-95 opacity-0"
        }`}
      >
        <div className="flex items-center justify-center mb-4">{getIcon()}</div>
        <h3 className={`text-lg font-bold text-center mb-2 ${getColor()}`}>
          {type === "success"
            ? "Berhasil"
            : type === "error"
            ? "Gagal"
            : "Memproses"}
        </h3>
        <p className="text-gray-700 text-center mb-4">{message}</p>
        {type !== "info" && (
          <div className="flex justify-center">
            <button
              onClick={onClose}
              className={`px-4 py-2 rounded-lg text-white  ${
                type === "success"
                  ? "bg-green-500 hover:bg-green-600"
                  : "bg-red-500 hover:bg-red-600"
              } transition duration-150`}
            >
              Tutup
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
