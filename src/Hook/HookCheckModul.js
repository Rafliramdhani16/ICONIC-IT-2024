import { useState } from "react";
import { checkModul } from "../Services/Materi";

export const useCheckModul = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleCheckModul = async (modulId) => {
    setLoading(true);
    setError(null);
    try {
      const response = await checkModul(modulId);
      setLoading(false);
      return response;
    } catch (err) {
      setError(err.message);
      setLoading(false);
      return null;
    }
  };

  return { handleCheckModul, loading, error };
};
