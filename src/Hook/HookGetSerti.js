import { useState, useEffect } from "react";
import { getSertifikat } from "../Services/Materi";

export const useSertifikat = () => {
  const [sertifikat, setSertifikat] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSertifikat = async () => {
      try {
        const response = await getSertifikat();
        if (response.success === 200) {
          setSertifikat(response.data);
        } else {
          throw new Error(response.message || "Failed to fetch sertifikat");
        }
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchSertifikat();
  }, []);

  return { sertifikat, loading, error };
};
