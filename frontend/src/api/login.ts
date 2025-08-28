import axios from "axios";

const API = import.meta.env.VITE_API_URL;

const loginAPI = async (username: string, password: string) => {
  try {
    const response = await axios.post(`${API}/login`, {
      username,
      password,
    });

    if (response.status === 200) {
      console.log("Login successful ✅", response.data);
    }

    return response.data;
  } catch (error) {
    console.error("Login failed ❌", error);
    throw error;
  }
};

export default loginAPI;
