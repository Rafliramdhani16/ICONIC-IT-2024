import axios from "axios";

const API_URL = "https://backend-gyanakaya.bhadrikais.my.id/api";

// kategori depan
export const getAllMateri = async () => {
  try {
    const response = await axios.get(`${API_URL}/kategori/front`, {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error fetching materi:", error);
    throw error;
  }
};

// materi news
export const getLastestMateri = async (materiId) => {
  try {
    const response = await axios.get(`${API_URL}/materi/lastest`);
    return response.data.data;
  } catch (error) {
    console.error("Error fetching latest materi:", error);
    throw error;
  }
};

// kategori uuid
export const getMateriByKategori = async (uuid) => {
  try {
    const response = await axios.get(`${API_URL}/kategori/${uuid}`, {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching materi by kategori:", error);
    throw error;
  }
};

// materi uuid
export const getModulByMateri = async (materiId) => {
  try {
    const response = await axios.get(`${API_URL}/materi/${materiId}`, {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching modul by materi:", error);
    throw error;
  }
};

export const checkMateriStatus = async (materiId) => {
  try {
    const response = await axios.get(`${API_URL}/user/materi/${materiId}`, {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error checking materi status:", error);
    throw error;
  }
};

export const unlockMateri = async (materiId) => {
  try {
    const response = await axios.post(
      `${API_URL}/user/materi/${materiId}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("token")}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error unlocking materi:", error);
    throw error;
  }
};
// Di dalam file Services/Materi.js
export const checkModul = async (modulId) => {
  try {
    const response = await axios.post(
      `${API_URL}/user/modul/${modulId}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("token")}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "An error occurred");
  }
};

// detail modul
export const getModulDetail = async (materiId, modulId) => {
  try {
    const response = await axios.get(
      `${API_URL}/materi/${materiId}/${modulId}`,
      {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("token")}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error mengambil detail modul:", error);
    throw error;
  }
};
