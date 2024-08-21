import axios from "axios";

const API_URL = "http://127.0.0.1:8000/api";

export const getAllMateri = async () => {
  try {
    const response = await axios.get(`${API_URL}/materi/all`, {
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
