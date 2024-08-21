import { useState, useEffect } from "react";
import { getAllMateri } from "../Services/Materi";

const useMateri = () => {
  const [materi, setMateri] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMateri = async () => {
      try {
        const response = await getAllMateri();
        if (response.success === 200) {
          setMateri(response.data);
        } else {
          setError(response.message);
        }
      } catch (error) {
        setError("Failed to fetch materi.");
      } finally {
        setLoading(false);
      }
    };

    fetchMateri();
  }, []);

  return { materi, loading, error };
};

export default useMateri;
