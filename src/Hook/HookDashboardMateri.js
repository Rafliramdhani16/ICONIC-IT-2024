import { useState, useEffect } from "react";
import { fetchMateri, editMateri, deleteMateri } from "../Services/Dashboard"; // Assume these functions are implemented

const useMateriTable = () => {
  const [materiList, setMateriList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadMateri = async () => {
    try {
      setIsLoading(true);
      const result = await fetchMateri();
      if (result.success) {
        setMateriList(result.data);
      } else {
        setError(result.message);
      }
    } catch (err) {
      setError("Failed to load materi data.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadMateri();
  }, []);

  const handleEdit = async (id, updatedData) => {
    try {
      const result = await editMateri(id, updatedData);
      if (result.success) {
        loadMateri(); // Reload the data after successful edit
      } else {
        setError(result.message);
      }
    } catch (err) {
      setError("Failed to edit materi.");
    }
  };

  const handleDelete = async (id) => {
    try {
      const result = await deleteMateri(id);
      if (result.success) {
        loadMateri(); // Reload the data after successful delete
      } else {
        setError(result.message);
      }
    } catch (err) {
      setError("Failed to delete materi.");
    }
  };

  return { materiList, isLoading, error, handleEdit, handleDelete };
};

export default useMateriTable;
