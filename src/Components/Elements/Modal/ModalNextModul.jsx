import React from "react";

const ModalNextModul = ({
  isOpen,
  onClose,
  onConfirm,
  title,
  closebtn,
  confirmbtn,
  message,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-[9999]">
      <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-filter backdrop-blur-sm"></div>
      <div className="bg-white rounded-lg p-8 max-w-md w-full shadow-xl relative z-10 transform transition-all duration-300 ease-in-out">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">{title}</h2>
        <p className="mb-6 text-gray-600">{message}</p>
        <div className="flex justify-end space-x-4">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-gray-400"
          >
            {closebtn}
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            {confirmbtn}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalNextModul;
