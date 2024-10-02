import React from "react";
import { InputField } from "../Input/InputEditUser";

export const EditUserModal = ({
  isOpen,
  onClose,
  editForm,
  onInputChange,
  onSubmit,
}) => {
  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitting form data:", editForm);
    onSubmit(e);
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
      <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
        <h3 className="text-lg font-bold mb-4">Edit User</h3>
        <form onSubmit={handleSubmit}>
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
          <InputField
            label="Role ID"
            name="role_id"
            type="number"
            value={editForm.role_id}
            onChange={onInputChange}
          />
          <div className="flex items-center justify-between mt-4">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Ubah
            </button>
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Batal
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
