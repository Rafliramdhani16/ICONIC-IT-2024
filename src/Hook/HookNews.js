import { useState, useEffect } from "react";
import { getLastestMateri } from "../Services/Materi";

const useLastestMateri = () => {
  const [materi, setMateri] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMateri = async () => {
      try {
        const data = await getLastestMateri();
        setMateri(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMateri();
  }, []);

  return { materi, loading, error };
};

export default useLastestMateri;
