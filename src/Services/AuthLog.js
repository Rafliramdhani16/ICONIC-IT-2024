import axios from "axios";

const API_URL = "http://127.0.0.1:8000/api";
export const registerUser = async (data) => {
  try {
    const response = await axios.post(`${API_URL}/user/signup`, data, {
      headers: {
        "Content-Type": "application/json",
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

export const loginUser = async (data) => {
  try {
    const response = await axios.post(`${API_URL}/user/signin`, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    const { token, data: userData } = response.data;
    sessionStorage.setItem("token", token);
    sessionStorage.setItem("username", userData.username);
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

export const logoutUser = async () => {
  try {
    const token = sessionStorage.getItem("token");

    // Cek apakah token telah diubah-ubah (misalnya, bukan format JWT token yang valid)
    if (!token || token.split(".").length !== 3) {
      sessionStorage.removeItem("token");
      sessionStorage.removeItem("username");
      return {
        success: false,
        message: "Token tidak valid atau telah diubah.",
      };
    }

    // Jika format token benar, lanjutkan dengan permintaan API
    await axios.post(`${API_URL}/user/signout`, null, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
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

export const getCurrentUserFromToken = () => {
  return sessionStorage.getItem("username");
};
export const resetPassword = async (data) => {
  try {
    const response = await axios.post(
      "ganti bang sama api buat email reset password",
      data,
      {
        headers: {
          "Content-Type": "application/json",
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

export const requestResetPassword = async (data) => {
  try {
    const response = await axios.post(
      "ganti api ini bang sama yang reset password ",
      data,
      {
        headers: {
          "Content-Type": "application/json",
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

// API lihat profile
export const getUserData = async () => {
  try {
    const response = await axios.get(`${API_URL}/user/me`, {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
};

// API edit user
export const updateUserData = async (userData) => {
  try {
    // Membuat instance FormData
    const formData = new FormData();

    // Menambahkan setiap property userData ke dalam formData
    for (const key in userData) {
      formData.append(key, userData[key]);
    }

    const response = await axios.put(`${API_URL}/user/edit`, formData, {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
        "Content-Type": "multipart/form-data", // Mengatur header untuk pengiriman file
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error updating user data:", error);
    throw error;
  }
};
