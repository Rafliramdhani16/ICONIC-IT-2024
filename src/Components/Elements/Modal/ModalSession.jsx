import React from "react";
import { FaTimesCircle } from "react-icons/fa";

const ModalSession = ({ message, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm">
        <div className="flex flex-col items-center mb-4">
          <FaTimesCircle className="text-red-500 w-16 h-16 mb-4" />
          <p className="text-center text-lg font-semibold">{message}</p>
        </div>
        <button
          onClick={onClose}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full w-full transition duration-300"
        >
          OK
        </button>
      </div>
      <div
        className="fixed inset-0 bg-black opacity-50"
        onClick={onClose}
      ></div>
    </div>
  );
};

export default ModalSession;
