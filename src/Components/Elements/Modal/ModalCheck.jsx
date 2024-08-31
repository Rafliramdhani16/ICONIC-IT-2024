import React from "react";

const ConfirmModal = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"></div>
      <div className="bg-white p-8 rounded-lg shadow-lg relative z-10 max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">
          Konfirmasi Belajar
        </h2>
        <p className="mb-6 text-gray-600">
          Apakah Anda siap untuk memulai pembelajaran?
        </p>
        <div className="flex justify-end space-x-4">
          <button
            className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transform hover:scale-105 transition-all duration-300 ease-in-out"
            onClick={onClose}
          >
            Tidak
          </button>
          <button
            className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transform hover:scale-105 transition-all duration-300 ease-in-out"
            onClick={onConfirm}
          >
            Ya, Mulai Belajar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
