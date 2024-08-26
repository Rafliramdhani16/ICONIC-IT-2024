import { useState, useEffect } from "react";
import { getMateriByKategori } from "../Services/Materi";

const useMateriByKategori = (uuid) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const result = await getMateriByKategori(uuid);
        setData(result.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    if (uuid) {
      fetchData();
    }
  }, [uuid]);

  return { data, loading, error };
};

export default useMateriByKategori;
