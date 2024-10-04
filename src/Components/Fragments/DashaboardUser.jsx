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
    roles,
  } = useUserEdit(fetchUsers);
  const { handleDelete, isDeleting, deleteError } = useUserDelete(fetchUsers);
  const [isRestoreModalOpen, setIsRestoreModalOpen] = useState(false);

  const handleRestoreSuccess = () => {
    fetchUsers();
    setIsRestoreModalOpen(false);
  };

  return (
    <div className="container mx-auto p-6">
      <div className="mb-6">
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
          className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-6"
          role="alert"
        >
          <strong className="font-bold">Error:</strong>
          <span className="block sm:inline"> {deleteError}</span>
        </div>
      )}
      <div className="overflow-x-auto shadow-lg rounded-lg">
        <table className="min-w-full bg-white">
          <thead className="bg-gray-200">
            <tr>
              <th className="py-4 px-6 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider border-b border-r border-gray-300">
                Nama Lengkap
              </th>
              <th className="py-4 px-6 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider border-b border-r border-gray-300">
                Username
              </th>
              <th className="py-4 px-6 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider border-b border-r border-gray-300">
                Email
              </th>
              <th className="py-4 px-6 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider border-b border-r border-gray-300">
                Peran
              </th>
              <th className="py-4 px-6 text-center text-sm font-semibold text-gray-700 uppercase tracking-wider border-b border-gray-300">
                Aksi
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {users.map((user) => (
              <tr key={user.uuid} className="hover:bg-gray-50">
                <td className="py-4 px-6 text-sm text-gray-500 border-r border-gray-300">{`${user.firstname} ${user.lastname}`}</td>
                <td className="py-4 px-6 text-sm text-gray-500 border-r border-gray-300">
                  {user.username}
                </td>
                <td className="py-4 px-6 text-sm text-gray-500 border-r border-gray-300">
                  {user.email}
                </td>
                <td className="py-4 px-6 text-sm text-gray-500 border-r border-gray-300">
                  {user.role.role}
                </td>
                <td className="py-4 px-6 text-center">
                  <div className="flex justify-center space-x-2">
                    <button
                      onClick={() => handleEdit(user.uuid)}
                      className="text-blue-600 hover:text-blue-800 transition-colors duration-200"
                      disabled={isDeleting}
                    >
                      <FaEdit size={20} />
                    </button>
                    <button
                      onClick={() => handleDelete(user.uuid)}
                      className="text-red-600 hover:text-red-800 transition-colors duration-200"
                      disabled={isDeleting}
                    >
                      <FaTrash size={20} />
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
        roles={roles}
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
