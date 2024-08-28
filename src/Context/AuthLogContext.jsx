import React, { createContext, useState, useContext, useEffect } from "react";
import { loginUser, logoutUser, getUserData } from "../Services/AuthLog";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchUserData = async () => {
    try {
      const token = sessionStorage.getItem("token");
      if (token) {
        const userData = await getUserData();
        if (userData.success === 200) {
          setUser(userData.data);
        } else {
          throw new Error("Failed to fetch user data");
        }
      }
    } catch (err) {
      setError("Gagal memuat data pengguna");
      console.error("Error fetching user data:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  const login = async (credentials) => {
    try {
      const response = await loginUser(credentials);
      if (response.success === 200) {
        await fetchUserData();
        setError(null);
        return { success: true };
      } else {
        setError(response.message || "Login gagal");
        return {
          success: false,
          message: response.message,
          errors: response.data || {},
        };
      }
    } catch (err) {
      setError("Terjadi kesalahan saat login");
      return { success: false, message: "Terjadi kesalahan saat login" };
    }
  };

  const logout = async () => {
    try {
      await logoutUser();
      setUser(null);
      setError(null);
      sessionStorage.removeItem("token");
    } catch (err) {
      setError("Terjadi kesalahan saat logout");
    }
  };

  const clearError = () => {
    setError(null);
  };

  const value = {
    user,
    login,
    logout,
    loading,
    error,
    clearError,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
