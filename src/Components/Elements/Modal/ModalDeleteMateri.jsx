import React from "react";
import PropTypes from "prop-types";

const ModalDeleteConfirmation = ({
  isOpen,
  onClose,
  onConfirm,
  materiName,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center z-50">
      <div className="relative p-8 bg-white w-full max-w-md m-auto rounded-md shadow-lg">
        <div className="mb-6">
          <div className="flex items-center justify-center mb-4">
            <svg
              className="w-16 h-16 text-red-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-center mb-4">
            Konfirmasi Hapus
          </h2>
          <p className="text-gray-700 text-center mb-2">
            Apakah Anda yakin ingin menghapus materi:
          </p>
          <p className="text-gray-900 font-semibold text-center mb-4">
            "{materiName}"
          </p>
          <p className="text-red-600 text-sm text-center">
            Tindakan ini tidak dapat dibatalkan dan akan menghapus semua data
            terkait materi ini.
          </p>
        </div>

        <div className="flex items-center justify-center space-x-4">
          <button
            type="button"
            onClick={onClose}
            className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 transition-colors duration-200"
          >
            Batal
          </button>
          <button
            type="button"
            onClick={onConfirm}
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400 transition-colors duration-200"
          >
            Hapus
          </button>
        </div>
      </div>
    </div>
  );
};

ModalDeleteConfirmation.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
  materiName: PropTypes.string,
};

ModalDeleteConfirmation.defaultProps = {
  materiName: "",
};

export default ModalDeleteConfirmation;
