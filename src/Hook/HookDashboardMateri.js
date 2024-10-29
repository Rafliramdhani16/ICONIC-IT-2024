import { useState, useEffect } from "react";
import { fetchMateri, editMateri } from "../Services/Dashboard";

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
        loadMateri();
      } else {
        setError(result.message);
      }
    } catch (err) {
      setError("Failed to edit materi.");
    }
  };

  return { materiList, isLoading, error, handleEdit, loadMateri };
};

export default useMateriTable;
