import React from "react";

const ModalUnlock = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg">
        <h3 className="text-lg font-semibold mb-4">Konfirmasi</h3>
        <p>Apakah Anda yakin sudah menyelesaikan modul ini?</p>
        <div className="mt-4 flex justify-end">
          <button
            onClick={onClose}
            className="mr-2 px-4 py-2 bg-gray-300 text-black rounded"
          >
            Batal
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Ya, Lanjutkan
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalUnlock;
