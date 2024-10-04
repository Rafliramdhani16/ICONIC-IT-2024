import { useState, useEffect } from "react";
import { getUserById, editUser, getAllRoles } from "../Services/Dashboard";

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

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [roles, setRoles] = useState([]);

  useEffect(() => {
    const fetchRoles = async () => {
      try {
        const response = await getAllRoles();
        if (response.success === 200) {
          setRoles(response.data);
        } else {
          console.error("Failed to fetch roles:", response.message);
        }
      } catch (error) {
        console.error("Error in fetchRoles:", error);
      }
    };

    fetchRoles();
  }, []);

  const handleEdit = async (id) => {
    try {
      setIsLoading(true);
      const response = await getUserById(id);
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
        throw new Error(response.message || "Failed to fetch user details");
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e) => {
    setEditForm({ ...editForm, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const response = await editUser(selectedUser.uuid, editForm);
      if (response.success === 200 || response.success === true) {
        setIsModalOpen(false);
        fetchUsers();
        alert("User berhasil diperbarui!");
      } else {
        throw new Error(response.message || "Failed to update user");
      }
    } catch (err) {
      setError(err.message);
      alert("Gagal memperbarui user. Silakan coba lagi.");
    } finally {
      setIsLoading(false);
    }
  };

  return {
    selectedUser,
    isModalOpen,
    editForm,
    roles,
    isLoading,
    error,
    setIsModalOpen,
    handleEdit,
    handleInputChange,
    handleSubmit,
  };
};
