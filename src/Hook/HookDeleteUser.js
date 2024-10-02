import { useState } from "react";
import { deleteUser } from "../Services/Dashboard"; // Assuming you have this function in your api file

export const useUserDelete = (fetchUsers) => {
  const [isDeleting, setIsDeleting] = useState(false);
  const [deleteError, setDeleteError] = useState(null);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      setIsDeleting(true);
      setDeleteError(null);
      try {
        const response = await deleteUser(id);
        if (response.success) {
          fetchUsers(); // Refresh the user list after successful deletion
        } else {
          setDeleteError(response.message || "Failed to delete user");
        }
      } catch (error) {
        setDeleteError("An error occurred while deleting the user");
      } finally {
        setIsDeleting(false);
      }
    }
  };

  return { handleDelete, isDeleting, deleteError };
};
