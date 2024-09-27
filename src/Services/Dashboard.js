import axios from "axios";
const API_URL = "https://backend-gyanakaya.bhadrikais.my.id/api";

//MAWA USER
const GetUserData = {
  method: "GET",
  url: `${API_URL}/dashboard/user/{id}`,
  headers: {
    Accept: "application/json",
    Authorization: `Bearer ${token}`,
  },
};

try {
  const { data } = await axios.request(GetUserData);
  console.log(data);
} catch (error) {
  console.error(error);
}
