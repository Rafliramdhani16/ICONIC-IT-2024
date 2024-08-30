import { useState, useCallback } from "react";
import { getKlaimSertifikat } from "../Services/Materi";

export const useKlaimSertifikat = () => {
  const [sertifikatData, setSertifikatData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const klaimSertifikat = useCallback((uuid) => {
    setLoading(true);
    return getKlaimSertifikat(uuid)
      .then((response) => {
        setSertifikatData(response.data);
        setError(null);
        return response.data; // Kembalikan data sertifikat untuk ditangani
      })
      .catch((error) => {
        setError("Failed to claim certificate. Please try again.");
        throw error; // Lemparkan error untuk ditangani di .catch
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return { sertifikatData, loading, error, klaimSertifikat };
};
