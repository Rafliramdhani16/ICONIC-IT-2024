import axios from "axios";
const API_URL = "https://backend-gyanakaya.bhadrikais.my.id/api";
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
    const formData = new FormData();
    for (const key in userData) {
      if (
        key === "image" &&
        typeof userData[key] === "object" &&
        userData[key] instanceof File
      ) {
        formData.append(key, userData[key]);
      } else if (key !== "image") {
        formData.append(key, userData[key]);
      }
    }
    formData.append("_method", "put");
    const response = await axios.post(`${API_URL}/user/edit`, formData, {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
        "Content-Type": "multipart/form-data",
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error updating user data:", error);
    throw error;
  }
};

const getAuthHeader = () => {
  const token = sessionStorage.getItem("token");
  return token ? { Authorization: `Bearer ${token}` } : {};
};

export const changePassword = async (data) => {
  try {
    const response = await axios.post(`${API_URL}/user/reset-password`, data, {
      headers: {
        ...getAuthHeader(),
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Change password error:", error);
    return {
      success: false,
      message:
        error.response?.data?.message ||
        "Terjadi kesalahan saat mengganti kata sandi",
      data: error.response?.data?.data || {},
    };
  }
};

export const fetchReviews = async () => {
  try {
    const response = await fetch(`${API_URL}/reviews`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch reviews:", error);
    throw error;
  }
};
