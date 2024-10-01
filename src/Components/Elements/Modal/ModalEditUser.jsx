import React from "react";

const ModalEditUser = ({ children, onClose }) => {
  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-75 flex items-center justify-center">
      <div className="bg-white rounded-lg p-4">
        {children}
        <button
          className="mt-4 bg-red-500 text-white px-4 py-2"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ModalEditUser;
