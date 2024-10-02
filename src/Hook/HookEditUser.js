import { useState } from "react";
import { getUserById, editUser } from "../Services/Dashboard";

export const useUserEdit = (fetchUsers) => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editForm, setEditForm] = useState({
    username: "",
    firstname: "",
    lastname: "",
    email: "",
    role_id: "",
  });

  const handleEdit = async (id) => {
    console.log("Editing user with id:", id);
    const response = await getUserById(id);
    console.log("User details:", response);
    if (response.success === 200) {
      setSelectedUser(response.data);
      setEditForm({
        username: response.data.username,
        firstname: response.data.firstname,
        lastname: response.data.lastname,
        email: response.data.email,
        role_id: response.data.role.id,
      });
      setIsModalOpen(true);
    } else {
      console.error("Error fetching user details:", response.message);
    }
  };

  const handleInputChange = (e) => {
    setEditForm({ ...editForm, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Attempting to update user with data:", editForm);
    const response = await editUser(selectedUser.uuid, editForm);
    console.log("Response from editUser:", response);
    if (response.success === 200 || response.success === true) {
      console.log("Update successful");
      setIsModalOpen(false);
      fetchUsers();
      alert("User berhasil diperbarui!");
    } else {
      console.error(
        "Error updating user:",
        response.errors || response.message
      );
      alert("Gagal memperbarui user. Silakan coba lagi.");
    }
  };

  return {
    selectedUser,
    isModalOpen,
    editForm,
    setIsModalOpen,
    handleEdit,
    handleInputChange,
    handleSubmit,
  };
};
