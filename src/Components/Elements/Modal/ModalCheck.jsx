import React from "react";
import { IoCheckmarkCircle, IoCloseCircle } from "react-icons/io5";

const ConfirmModal = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold mb-4">Konfirmasi Belajar</h2>
        <p className="mb-6">Apakah Anda siap untuk memulai pembelajaran?</p>
        <div className="flex justify-end space-x-4">
          <button
            className="flex items-center px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            onClick={onClose}
          >
            <IoCloseCircle className="mr-2" />
            Tidak
          </button>
          <button
            className="flex items-center px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
            onClick={onConfirm}
          >
            <IoCheckmarkCircle className="mr-2" />
            Ya, Mulai Belajar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
