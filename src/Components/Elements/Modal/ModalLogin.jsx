import React, { useEffect, useState } from "react";
import { FaTimesCircle } from "react-icons/fa";

const LoginModal = ({ isVisible, onClose, onLogin, message }) => {
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

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center transition-all duration-300 ease-in-out ${
        isRendered ? "bg-black bg-opacity-50 backdrop-blur-sm" : "bg-opacity-0"
      }`}
    >
      <div
        className={`bg-white rounded-lg shadow-xl p-6 m-4 max-w-sm w-full transform transition-all duration-300 ${
          isRendered ? "scale-100 opacity-100" : "scale-95 opacity-0"
        } border-2 border-red-600`}
      >
        <div className="flex items-center justify-center mb-4">
          <FaTimesCircle className="text-red-500 w-10 h-10" />
        </div>
        <h3 className="text-lg font-bold text-center mb-2 text-red-600">
          Akses Ditolak
        </h3>
        <p className="text-gray-700 text-center mb-4">{message}</p>
        <div className="flex justify-center space-x-4">
          <button
            onClick={onLogin}
            className="px-4 py-2 rounded-lg text-white bg-blue-500 hover:bg-blue-600 transition duration-150"
          >
            Masuk
          </button>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg text-white bg-gray-500 hover:bg-gray-600 transition duration-150"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
