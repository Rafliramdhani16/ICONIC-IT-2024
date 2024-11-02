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

export const getAllRoles = async () => {
  const token = getToken();
  if (!token) {
    return { success: false, message: "Token tidak tersedia." };
  }

  try {
    const response = await axios.get(`${API_URL}/dashboard/role/all`, {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching roles:", error);
    return { success: false, message: error.message };
  }
};

export const getDeletedUsers = async () => {
  const token = getToken();
  if (!token) {
    return { success: false, message: "Token tidak tersedia." };
  }

  try {
    const response = await axios.get(`${API_URL}/dashboard/user/all/trash`, {
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
      return { success: false, message: "Tidak ada respons dari server." };
    } else {
      return { success: false, message: error.message };
    }
  }
};
export const restoreUser = async (id) => {
  const token = getToken();
  if (!token) {
    return { success: false, message: "Token tidak tersedia." };
  }

  try {
    const response = await axios.post(
      `${API_URL}/dashboard/user/${id}/restore`,
      {},
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
      return { success: false, message: "Tidak ada respons dari server." };
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

export const fetchMateri = async () => {
  const token = getToken();
  if (!token) {
    return { success: false, message: "Token tidak tersedia." };
  }

  try {
    const response = await axios.get(`${API_URL}/dashboard/materi/all`, {
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

// editMateri.js
export const editMateri = async (materi, userData) => {
  const token = getToken();
  if (!token) {
    throw new Error("Token tidak tersedia.");
  }

  if (!materi) {
    throw new Error("ID materi tidak valid.");
  }

  try {
    const response = await axios.post(
      `${API_URL}/dashboard/materi/${materi}/edit`,
      userData,
      {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      }
    );

    if (!response.data.success) {
      throw new Error(response.data.message || "Failed to update materi");
    }

    return response.data;
  } catch (error) {
    if (error.response) {
      throw new Error(error.response.data.message || "Server error");
    } else if (error.request) {
      throw new Error("No response from server");
    }
    throw error;
  }
};
//fungsi create materi
export const addMateri = async (materiData) => {
  const token = sessionStorage.getItem("token");
  if (!token) {
    return { success: false, message: "Token tidak tersedia." };
  }

  try {
    const response = await axios.post(
      `${API_URL}/dashboard/materi/create`,
      materiData,
      {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response.data;
  } catch (error) {
    if (error.response) {
      return error.response.data;
    } else {
      return {
        success: false,
        message: "Terjadi kesalahan saat menambahkan materi.",
      };
    }
  }
};

export const getMateriDetail = async (materi) => {
  const token = getToken();
  if (!token) {
    return { success: false, message: "Token tidak tersedia." };
  }

  try {
    const response = await axios.post(
      `${API_URL}/dashboard/materi/{materi}`,
      materi,
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

// hapus materi
export const deleteMateri = async (materi) => {
  const token = getToken();
  if (!token) {
    return { success: false, message: "Token tidak tersedia." };
  }

  try {
    const response = await axios.delete(
      `${API_URL}/dashboard/materi/${materi}/delete`,
      {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    if (error.response?.status === 401) {
      return {
        success: false,
        message: "Sesi anda telah berakhir. Silakan login kembali.",
      };
    }
    return {
      success: false,
      message: error.response?.data?.message || "Gagal menghapus materi.",
    };
  }
};
