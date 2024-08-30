import { useState, useCallback } from "react";
import { searchMateri } from "../Services/Materi";

export const useSearch = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const performSearch = useCallback(async (query) => {
    if (!query) {
      setSearchResults([]);
      return;
    }

    setIsLoading(true);
    setError(null);
    try {
      const response = await searchMateri(query);
      console.log("Response from searchMateri:", response);
      if (response.success == 200 && Array.isArray(response.data)) {
        console.log(1);
        const refinedResults = response.data.map((item) => ({
          uuid: item.uuid,
          materi: item.materi,
        }));
        setSearchResults(refinedResults);
      } else {
        throw new Error(response.message || "Pencarian gagal");
      }
    } catch (err) {
      console.error("Search error:", err);
      setError(err.message || "Pencarian gagal");
      setSearchResults([]);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return { searchResults, isLoading, error, performSearch };
};
