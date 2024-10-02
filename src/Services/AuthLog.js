import axios from "axios";

const API_URL = "https://backend-gyanakaya.bhadrikais.my.id/api";

// Fungsi untuk mendapatkan token dari sessionStorage
const getToken = () => {
  return sessionStorage.getItem("token");
};

// Fungsi untuk mendapatkan header otentikasi
const getAuthHeader = () => {
  const token = getToken();
  return token ? { Authorization: `Bearer ${token}` } : {};
};

// Fungsi umum untuk menangani kesalahan
const handleError = (error) => {
  if (error.response) {
    return error.response.data;
  } else if (error.request) {
    return { success: false, message: "No response from server." };
  } else {
    return { success: false, message: error.message };
  }
};

// Fungsi untuk registrasi user
export const registerUser = async (data) => {
  try {
    const response = await axios.post(`${API_URL}/user/signup`, data, {
      headers: { "Content-Type": "application/json" },
    });
    return response.data;
  } catch (error) {
    return handleError(error);
  }
};

// Fungsi untuk login user
export const loginUser = async (data) => {
  try {
    const response = await axios.post(`${API_URL}/user/signin`, data, {
      headers: { "Content-Type": "application/json" },
    });

    if (response.data.success == 200) {
      const { token, data: userData } = response.data;
      sessionStorage.setItem("token", token);
      sessionStorage.setItem("username", userData.username);
    }
    return response.data;
  } catch (error) {
    return handleError(error);
  }
};

// Fungsi untuk logout user
export const logoutUser = async () => {
  const token = getToken();
  if (!token) {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("username");
    return { success: true };
  }

  try {
    await axios.post(`${API_URL}/user/signout`, null, {
      headers: { ...getAuthHeader(), "Content-Type": "application/json" },
    });
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("username");
    return { success: true };
  } catch (error) {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("username");
    return { success: false, message: "Terjadi kesalahan jaringan" };
  }
};

// Fungsi untuk mendapatkan username dari token
export const getCurrentUserFromToken = () => {
  return sessionStorage.getItem("username");
};

// Fungsi untuk request reset password
export const requestResetPassword = async (data) => {
  try {
    const response = await axios.post(`${API_URL}/user/reset`, data, {
      headers: { "Content-Type": "application/json" },
    });
    return response.data;
  } catch (error) {
    return handleError(error);
  }
};

// Fungsi untuk cek token
export const cekToken = async (data) => {
  try {
    const response = await axios.post(`${API_URL}/user/cektoken`, data);
    return response.data;
  } catch (error) {
    console.error("cekToken error:", error);
    return handleError(error);
  }
};

// Fungsi untuk reset password
export const resetPassword = async (data) => {
  try {
    const response = await axios.post(
      `${API_URL}/user/reset/${data.token}`,
      data
    );
    return response.data;
  } catch (error) {
    console.error("resetPassword error:", error);
    return handleError(error);
  }
};

// Fungsi untuk mendapatkan data user
export const getUserData = async () => {
  try {
    const response = await axios.get(`${API_URL}/user/me`, {
      headers: getAuthHeader(),
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
};

// Fungsi untuk update data user
export const updateUserData = async (userData) => {
  try {
    const formData = new FormData();
    for (const key in userData) {
      if (key === "image" && userData[key] instanceof File) {
        formData.append(key, userData[key]);
      } else if (key !== "image") {
        formData.append(key, userData[key]);
      }
    }
    formData.append("_method", "put");
    const response = await axios.post(`${API_URL}/user/edit`, formData, {
      headers: { ...getAuthHeader(), "Content-Type": "multipart/form-data" },
    });
    return response.data;
  } catch (error) {
    console.error("Error updating user data:", error);
    throw error;
  }
};

// Fungsi untuk mengubah password
export const changePassword = async (data) => {
  try {
    const response = await axios.post(`${API_URL}/user/reset-password`, data, {
      headers: { ...getAuthHeader(), "Content-Type": "application/json" },
    });
    return response.data;
  } catch (error) {
    console.error("Change password error:", error);
    return handleError(error);
  }
};

// Fungsi untuk mengambil reviews
export const fetchReviews = async () => {
  try {
    const response = await axios.get(`${API_URL}/reviews`);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch reviews:", error);
    throw error;
  }
};

// Fungsi untuk mengambil semua user (admin)
export const getAllUsers = async () => {
  try {
    const response = await axios.get(`${API_URL}/dashboard/user/all`, {
      headers: { ...getAuthHeader(), Accept: "application/json" },
    });
    return response.data;
  } catch (error) {
    return handleError(error);
  }
};

// Fungsi untuk mengambil detail user by ID (admin)
export const getUserById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/dashboard/user/${id}`, {
      headers: { ...getAuthHeader(), Accept: "application/json" },
    });
    return response.data;
  } catch (error) {
    return handleError(error);
  }
};

// Fungsi untuk mengambil data user yang akan diedit (admin)
export const getUserEdit = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/dashboard/user/${id}/edit`, {
      headers: { ...getAuthHeader(), Accept: "application/json" },
    });
    return response.data;
  } catch (error) {
    return handleError(error);
  }
};
