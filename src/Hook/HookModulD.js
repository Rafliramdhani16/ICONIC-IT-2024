import { useState, useEffect } from "react";
import { getModulDetail } from "../Services/Materi";

export const useModulDetail = (materiId, modulId) => {
  const [modulDetail, setModulDetail] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchModulDetail = async () => {
      try {
        setLoading(true);
        const result = await getModulDetail(materiId, modulId);
        setModulDetail(result.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (materiId && modulId) {
      fetchModulDetail();
    }
  }, [materiId, modulId]);

  return { modulDetail, loading, error };
};
