import axios from "axios";
const API_URL = "http://localhost:8000/api";
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

export const logoutUser = async () => {
  try {
    const token = sessionStorage.getItem("token");
    if (!token || token.split(".").length !== 3) {
      sessionStorage.removeItem("token");
      sessionStorage.removeItem("username");
    }
    axios
      .post(`${API_URL}/user/signout`, null, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        sessionStorage.removeItem("token");
        sessionStorage.removeItem("username");
        if (response.status === 200) {
          return { success: true };
        } else {
          return { success: false, message: "Terjadi kesalahan jaringan" };
        }
      })
      .catch((error) => {
        sessionStorage.removeItem("token");
        sessionStorage.removeItem("username");
        return { success: false, message: "Terjadi kesalahan jaringan" };
      });
  } catch (error) {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("username");
    return { success: false, message: "Terjadi kesalahan jaringan" };
  }
};

export const getCurrentUserFromToken = () => {
  return sessionStorage.getItem("username");
};

export const requestResetPassword = async (data) => {
  try {
    const response = await axios.post(`${API_URL}/user/reset`, data, {
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

export const cekToken = async (data) => {
  try {
    const response = await axios.post(`${API_URL}/user/cektoken`, data);
    return response.data;
  } catch (error) {
    console.error("cekToken error:", error);
    return {
      success: false,
      message:
        error.response?.data?.message ||
        "Terjadi kesalahan saat memeriksa token",
      data: error.response?.data?.data || {},
    };
  }
};

export const resetPassword = async (data) => {
  try {
    const response = await axios.post(
      `${API_URL}/user/reset/${data.token}`,
      data
    );
    return response.data;
  } catch (error) {
    console.error("resetPassword error:", error);
    return {
      success: false,
      message:
        error.response?.data?.message ||
        "Terjadi kesalahan saat mengatur ulang kata sandi",
      data: error.response?.data?.data || {},
    };
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
      // Periksa jika key adalah "image" dan nilainya bukan file (yaitu, URL)
      if (
        key === "image" &&
        typeof userData[key] === "object" &&
        userData[key] instanceof File
      ) {
        // Jika image adalah file, tambahkan ke formData
        formData.append(key, userData[key]);
      } else if (key !== "image") {
        // Jika bukan image, tambahkan value seperti biasa
        formData.append(key, userData[key]);
      }
    }
    formData.append("_method", "put");

    const response = await axios.post(`${API_URL}/user/edit`, formData, {
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
