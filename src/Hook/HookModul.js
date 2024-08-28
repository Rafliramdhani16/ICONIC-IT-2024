import { useState, useEffect } from "react";
import {
  getModulByMateri,
  checkMateriStatus,
  unlockMateri,
} from "../Services/Materi";

const useModulByMateri = (materiId) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [joined, setJoined] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      const result = await getModulByMateri(materiId);
      setData(result.data);
      const statusResult = await checkMateriStatus(materiId);
      setJoined(statusResult.data.joined);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (materiId) {
      fetchData();
    }
  }, [materiId]);

  const handleUnlock = async () => {
    try {
      const result = await unlockMateri(materiId);
      if (result.success === 200) {
        setJoined(true);
        // Membuka modul pertama setelah bergabung
        setData((prevData) => ({
          ...prevData,
          modul: prevData.modul.map((modul, index) => {
            if (index === 0) {
              return { ...modul, unlock: true }; // Membuka modul pertama
            }
            return modul;
          }),
        }));
      }
      return result;
    } catch (err) {
      console.error("Error unlocking materi:", err);
      throw err;
    }
  };

  return { data, loading, error, joined, handleUnlock };
};

export default useModulByMateri;
