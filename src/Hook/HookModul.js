import { useState, useEffect } from "react";
import { getModulByMateri } from "../Services/Materi";

const useModulByMateri = (materiId) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const result = await getModulByMateri(materiId);
        setData(result.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    if (materiId) {
      fetchData();
    }
  }, [materiId]);

  return { data, loading, error };
};

export default useModulByMateri;
