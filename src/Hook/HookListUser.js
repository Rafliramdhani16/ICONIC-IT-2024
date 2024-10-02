import { useState, useEffect } from "react";
import { getAllUsers } from "../Services/Dashboard";

export const useUserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const response = await getAllUsers();
    if (response.success === 200) {
      setUsers(response.data);
    } else {
      console.error("Error fetching users:", response.message);
    }
  };

  return { users, fetchUsers };
};
