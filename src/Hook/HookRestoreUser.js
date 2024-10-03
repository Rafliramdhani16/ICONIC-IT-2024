import { useState, useCallback } from "react";
import { getDeletedUsers, restoreUser } from "../Services/Dashboard";

export const useUserRestore = (onRestoreSuccess) => {
  const [deletedUsers, setDeletedUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchDeletedUsers = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await getDeletedUsers();
      if (response.success === 200) {
        setDeletedUsers(response.data);
      } else {
        setError(response.message);
      }
    } catch (err) {
      setError("Terjadi kesalahan saat mengambil data pengguna yang dihapus.");
    } finally {
      setIsLoading(false);
    }
  }, []);

  const handleRestore = useCallback(
    async (id) => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await restoreUser(id);
        if (response.success === 200) {
          setDeletedUsers((prevUsers) =>
            prevUsers.filter((user) => user.uuid !== id)
          );
          if (onRestoreSuccess) onRestoreSuccess();
        } else {
          setError(response.message);
        }
      } catch (err) {
        setError("Terjadi kesalahan saat memulihkan pengguna.");
      } finally {
        setIsLoading(false);
      }
    },
    [onRestoreSuccess]
  );

  return { deletedUsers, isLoading, error, fetchDeletedUsers, handleRestore };
};
