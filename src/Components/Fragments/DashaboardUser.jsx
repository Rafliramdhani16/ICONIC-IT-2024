import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { useUserList } from "../../Hook/HookListUser";
import { useUserEdit } from "../../Hook/HookEditUser";
import { useUserDelete } from "../../Hook/HookDeleteUser";
import { EditUserModal } from "../Elements/Modal/ModalEditUser";

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

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">User Management</h1>
      {deleteError && (
        <div
          className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4"
          role="alert"
        >
          <strong className="font-bold">Error:</strong>
          <span className="block sm:inline"> {deleteError}</span>
        </div>
      )}
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Full Name</th>
            <th className="py-2 px-4 border-b">Username</th>
            <th className="py-2 px-4 border-b">Email</th>
            <th className="py-2 px-4 border-b">Role</th>
            <th className="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.uuid}>
              <td className="py-2 px-4 border-b">{`${user.firstname} ${user.lastname}`}</td>
              <td className="py-2 px-4 border-b">{user.username}</td>
              <td className="py-2 px-4 border-b">{user.email}</td>
              <td className="py-2 px-4 border-b">{user.role.role}</td>
              <td className="py-2 px-4 border-b">
                <button
                  onClick={() => handleEdit(user.uuid)}
                  className="text-blue-500 hover:text-blue-700 mr-2"
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
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <EditUserModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        editForm={editForm}
        onInputChange={handleInputChange}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default UserManagement;
