import axios from "axios";

export const registerUser = async (data) => {
  try {
    const response = await axios.post(
      "https://backend-gyanakaya.bhadrikais.my.id/api/user/signup",
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

export const loginUser = async (data) => {
  try {
    const response = await axios.post(
      "https://backend-gyanakaya.bhadrikais.my.id/api/user/signin",
      data,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

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
    await axios.post(
      "https://backend-gyanakaya.bhadrikais.my.id/api/user/signout",
      null,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${sessionStorage.getItem("token")}`,
        },
      }
    );
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("username");
  } catch (error) {
    return { success: false, message: "Network error occurred" };
  }
};

// mawa username tina token
export const getCurrentUserFromToken = () => {
  return sessionStorage.getItem("username");
};
