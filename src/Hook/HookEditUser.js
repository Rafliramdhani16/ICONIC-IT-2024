import { useState, useEffect } from "react";
import { fetchUserById } from "../Services/Dashboard"; // Pastikan path benar

const useUserEdit = (userId) => {
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchUserById(userId);
        setUserDetails(data.data);
      } catch (error) {
        console.error(error);
      }
    };
    if (userId) {
      fetchData();
    }
  }, [userId]);

  return userDetails;
};

export default useUserEdit;
