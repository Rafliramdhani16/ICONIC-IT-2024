import React, { useEffect } from "react";
import { useUserRestore } from "../../../Hook/HookRestoreUser";

export const RestoreUserModal = ({ isOpen, onClose, onRestoreSuccess }) => {
  const { deletedUsers, isLoading, error, fetchDeletedUsers, handleRestore } =
    useUserRestore(onRestoreSuccess);

  useEffect(() => {
    if (isOpen) {
      fetchDeletedUsers();
    }
  }, [isOpen, fetchDeletedUsers]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg w-96">
        <h2 className="text-xl font-bold mb-4">Pulihkan Pengguna</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        {isLoading ? (
          <p>Memuat...</p>
        ) : (
          <ul className="mb-4">
            {deletedUsers.map((user) => (
              <li key={user.uuid} className="flex items-center mb-2">
                <input
                  type="checkbox"
                  id={user.uuid}
                  className="mr-2"
                  onChange={() => handleRestore(user.uuid)}
                />
                <label htmlFor={user.uuid}>{user.username}</label>
              </li>
            ))}
          </ul>
        )}
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="bg-gray-300 text-black px-4 py-2 rounded mr-2"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
};
