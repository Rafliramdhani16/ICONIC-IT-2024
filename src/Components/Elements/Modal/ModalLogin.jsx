import React, { useEffect, useState } from "react";
import { FaExclamationTriangle } from "react-icons/fa";

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
        className={`bg-white rounded-lg shadow-xl p-8 m-4 max-w-sm w-full transform transition-all duration-300 ${
          isRendered ? "scale-100 opacity-100" : "scale-95 opacity-0"
        }`}
      >
        <div className="flex items-center justify-center mb-6">
          <FaExclamationTriangle className="text-red-500 w-16 h-16" />
        </div>
        <h3 className="text-2xl font-bold text-center mb-4 text-red-600">
          Akses Ditolak
        </h3>
        <p className="text-gray-700 text-center mb-6 text-lg">{message}</p>
        <div className="flex flex-col space-y-4">
          <button
            onClick={onLogin}
            className="w-full px-6 py-3 rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition duration-150 text-lg font-semibold"
          >
            Masuk
          </button>
          <button
            onClick={onClose}
            className="w-full px-6 py-3 rounded-lg text-gray-700 bg-gray-200 hover:bg-gray-300 transition duration-150 text-lg font-semibold"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
