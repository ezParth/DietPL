import axios from "axios";

const API = import.meta.env.VITE_API_URL;

const signupAPI = async (username: string, password: string, email: string) => {
  try {
    const response = await axios.post(`${API}/login`, {
      username,
      password,
      email
    });

    if (response.status === 200) {
      console.log(response.data);
    }

    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export default signupAPI;
