import React from "react";

const ModalDelete = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold mb-4">Konfirmasi Hapus</h2>
        <p className="mb-4">Anda yakin ingin menghapus kategori ini?</p>
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 mr-2 bg-gray-500 text-white rounded-lg"
          >
            Batal
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 bg-red-500 text-white rounded-lg"
          >
            Hapus
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalDelete;
