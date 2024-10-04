import React from "react";
import { InputField } from "../Input/InputEditUser";

export const EditUserModal = ({
  isOpen,
  onClose,
  editForm,
  onInputChange,
  onSubmit,
  roles,
}) => {
  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(e);
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 backdrop-blur-sm overflow-y-auto h-full w-full flex items-center justify-center z-50">
      <div className="relative p-8 border w-full max-w-md shadow-lg rounded-lg bg-white z-60">
        <h3 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Edit User
        </h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <InputField
            label="Username"
            name="username"
            value={editForm.username}
            onChange={onInputChange}
          />
          <InputField
            label="First Name"
            name="firstname"
            value={editForm.firstname}
            onChange={onInputChange}
          />
          <InputField
            label="Last Name"
            name="lastname"
            value={editForm.lastname}
            onChange={onInputChange}
          />
          <InputField
            label="Email"
            name="email"
            type="email"
            value={editForm.email}
            onChange={onInputChange}
          />
          <div>
            <label
              className="block text-neutral-800 text-sm font-bold mb-2"
              htmlFor="id_role"
            >
              Role
            </label>
            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
              id="id_role"
              name="id_role"
              value={editForm.id_role}
              onChange={onInputChange}
            >
              {roles.map((role) => (
                <option key={role.id} value={role.id}>
                  {role.role}
                </option>
              ))}
            </select>
          </div>
          <div className="flex justify-end space-x-4 mt-6">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400"
            >
              Batal
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Ubah
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
