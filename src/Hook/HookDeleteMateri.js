import { useState } from "react";
import { deleteMateri } from "../Services/Dashboard";

const useDeleteMateri = (onSuccess) => {
  const [isDeleting, setIsDeleting] = useState(false);
  const [error, setError] = useState(null);

  const handleDelete = async (id) => {
    if (!window.confirm("Apakah Anda yakin ingin menghapus materi ini?")) {
      return;
    }

    try {
      setIsDeleting(true);
      setError(null);

      const result = await deleteMateri(id);

      if (result.success) {
        if (onSuccess) {
          onSuccess();
        }
      } else {
        setError(result.message);
        if (
          result.message.includes("Token tidak tersedia") ||
          result.response?.status === 401
        ) {
          // Redirect ke halaman login jika token tidak valid
          window.location.href = "/login";
        }
      }
    } catch (err) {
      setError("Gagal menghapus materi.");
    } finally {
      setIsDeleting(false);
    }
  };

  return {
    handleDelete,
    isDeleting,
    error,
    setError,
  };
};

export default useDeleteMateri;
