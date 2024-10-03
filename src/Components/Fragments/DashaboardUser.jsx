import React, { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { FaRotateRight } from "react-icons/fa6";
import { useUserList } from "../../Hook/HookListUser";
import { useUserEdit } from "../../Hook/HookEditUser";
import { useUserDelete } from "../../Hook/HookDeleteUser";
import { EditUserModal } from "../Elements/Modal/ModalEditUser";
import { RestoreUserModal } from "../Elements/Modal/ModalRestore";

const UserManagement = () => {
  const { users, fetchUsers } = useUserList();
  const {
    isModalOpen,
    editForm,
    setIsModalOpen,
    handleEdit,
    handleInputChange,
    handleSubmit,
  } = useUserEdit(fetchUsers);
  const { handleDelete, isDeleting, deleteError } = useUserDelete(fetchUsers);
  const [isRestoreModalOpen, setIsRestoreModalOpen] = useState(false);

  const handleRestoreSuccess = () => {
    fetchUsers();
    setIsRestoreModalOpen(false);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="mb-4">
        <button
          onClick={() => setIsRestoreModalOpen(true)}
          className="flex items-center py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        >
          <FaRotateRight className="w-5 h-5 mr-2" />
          Pulihkan Pengguna
        </button>
      </div>
      {deleteError && (
        <div
          className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4"
          role="alert"
        >
          <strong className="font-bold">Error:</strong>
          <span className="block sm:inline"> {deleteError}</span>
        </div>
      )}
      <div className="overflow-x-auto shadow-md sm:rounded-lg">
        <table className="min-w-full text-sm text-left text-neutral-800 border-collapse rounded-xl">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
            <tr>
              <th scope="col" className="px-6 py-3 border border-gray-300">
                Nama Lengkap
              </th>
              <th scope="col" className="px-6 py-3 border border-gray-300">
                Username
              </th>
              <th scope="col" className="px-6 py-3 border border-gray-300">
                Email
              </th>
              <th scope="col" className="px-6 py-3 border border-gray-300">
                Peran
              </th>
              <th scope="col" className="px-6 py-3 border border-gray-300">
                Aksi
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr
                key={user.uuid}
                className="bg-white border-b hover:bg-gray-50"
              >
                <td className="px-6 py-4 border border-gray-300 text-neutral-800 ">{`${user.firstname} ${user.lastname}`}</td>
                <td className="px-6 py-4 border border-gray-300 text-neutral-800 ">
                  {user.username}
                </td>
                <td className="px-6 py-4 border border-gray-300 text-neutral-800 ">
                  {user.email}
                </td>
                <td className="px-6 py-4 border border-gray-300 text-neutral-800 ">
                  {user.role.role}
                </td>
                <td className="px-6 py-4 border border-gray-300 text-neutral-800 ">
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleEdit(user.uuid)}
                      className="text-blue-500 hover:text-blue-700"
                      disabled={isDeleting}
                    >
                      <FaEdit />
                    </button>
                    <button
                      onClick={() => handleDelete(user.uuid)}
                      className="text-red-500 hover:text-red-700"
                      disabled={isDeleting}
                    >
                      <FaTrash />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <EditUserModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        editForm={editForm}
        onInputChange={handleInputChange}
        onSubmit={handleSubmit}
      />
      <RestoreUserModal
        isOpen={isRestoreModalOpen}
        onClose={() => setIsRestoreModalOpen(false)}
        onRestoreSuccess={handleRestoreSuccess}
      />
    </div>
  );
};

export default UserManagement;
