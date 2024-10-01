import axios from "axios";

const API_URL = "https://backend-gyanakaya.bhadrikais.my.id/api";

// Fungsi untuk mendapatkan token dari sessionStorage
const getToken = () => {
  return sessionStorage.getItem("token");
};

// Fungsi untuk mengambil semua user
export const getAllUsers = async () => {
  const token = getToken(); // Ambil token dari sessionStorage
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
  const token = getToken(); // Ambil token dari sessionStorage
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

// Fungsi untuk mengambil data user yang akan diedit
export const getUserEdit = async (id) => {
  const token = getToken(); // Ambil token dari sessionStorage
  if (!token) {
    return { success: false, message: "Token tidak tersedia." };
  }

  try {
    const response = await axios.get(`${API_URL}/dashboard/user/${id}/edit`, {
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

// Contoh loginUser sudah ada dan tetap digunakan tanpa perubahan
export const loginUser = async (data) => {
  try {
    const response = await axios.post(`${API_URL}/user/signin`, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.data.success == 200) {
      const { token, data: userData } = response.data;
      sessionStorage.setItem("token", token);
      sessionStorage.setItem("username", userData.username);
      return response.data;
    } else {
      return response.data;
    }
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
