import React, { useState, useEffect, useCallback } from "react";
import { FaBell } from "react-icons/fa";

const ModalSession = ({ message, onClose, duration = 3000 }) => {
  const [showModal, setShowModal] = useState(true);

  const handleClose = useCallback(() => {
    setShowModal(false);
    if (onClose) onClose();
  }, [onClose]);

  useEffect(() => {
    const timer = setTimeout(handleClose, duration);
    return () => clearTimeout(timer);
  }, [duration, handleClose]);

  if (!showModal) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-2xl w-full max-w-sm transform transition-all duration-300 ease-in-out scale-100 opacity-100 relative z-10">
        <div className="flex flex-col items-center mb-6">
          <FaBell className="text-blue-500 w-20 h-20 mb-6 animate-pulse" />
          <p className="text-center text-xl font-semibold text-gray-800">
            {message}
          </p>
        </div>
        <button
          onClick={handleClose}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full w-full transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          OK
        </button>
      </div>
      <div
        className="fixed inset-0 bg-black bg-opacity-50 backdrop-filter backdrop-blur-sm transition-opacity duration-300"
        onClick={handleClose}
      ></div>
    </div>
  );
};

export default ModalSession;
