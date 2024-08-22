import axios from "axios";

const API_URL = "http://127.0.0.1:8000/api";

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
export const getLastestMateri = async () => {
  try {
    const response = await axios.get(`${API_URL}/materi/lastest`);
    return response.data.data;
  } catch (error) {
    console.error("Error fetching latest materi:", error);
    throw error;
  }
};
