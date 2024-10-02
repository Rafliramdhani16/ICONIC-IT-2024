import axios from "axios";

const API_URL = "https://backend-gyanakaya.bhadrikais.my.id/api";

// Fungsi untuk mendapatkan token dari sessionStorage
const getToken = () => {
  return sessionStorage.getItem("token");
};

// Fungsi untuk mengambil semua user
export const getAllUsers = async () => {
  const token = getToken();
  if (!token) {
    return { success: false, message: "Token tidak tersedia." };
  }

  try {
    const response = await axios.get(`${API_URL}/dashboard/user/all`, {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    if (error.response) {
      return error.response.data;
    } else if (error.request) {
      return { success: false, message: "No response from server." };
    } else {
      return { success: false, message: error.message };
    }
  }
};

// Fungsi untuk mengambil detail user by ID
export const getUserById = async (id) => {
  const token = getToken();
  if (!token) {
    return { success: false, message: "Token tidak tersedia." };
  }

  try {
    const response = await axios.get(`${API_URL}/dashboard/user/${id}`, {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    if (error.response) {
      return error.response.data;
    } else if (error.request) {
      return { success: false, message: "No response from server." };
    } else {
      return { success: false, message: error.message };
    }
  }
};

// Fungsi untuk mengedit data user
export const editUser = async (id, userData) => {
  const token = getToken();
  if (!token) {
    return { success: false, message: "Token tidak tersedia." };
  }

  try {
    const response = await axios.put(
      `${API_URL}/dashboard/user/${id}/edit`,
      userData,
      {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    if (error.response) {
      return error.response.data;
    } else if (error.request) {
      return { success: false, message: "No response from server." };
    } else {
      return { success: false, message: error.message };
    }
  }
};

// Fungsi untuk menghapus user
export const deleteUser = async (id) => {
  const token = getToken();
  if (!token) {
    return { success: false, message: "Token tidak tersedia." };
  }

  try {
    const response = await axios.delete(
      `${API_URL}/dashboard/user/${id}/delete`,
      {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    if (error.response) {
      return error.response.data;
    } else if (error.request) {
      return { success: false, message: "No response from server." };
    } else {
      return { success: false, message: error.message };
    }
  }
};
