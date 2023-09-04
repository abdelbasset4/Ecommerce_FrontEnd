import axios from "axios";

const useRefreshToken = () => {
  const refresh = async () => {
    const response = axios.post("/api/v1/auth/refresh-token", {
      withCredentials: true,
    });
    console.log(response);
    localStorage.setItem("token", response?.token);
    return response?.token;
  };
  return refresh;
};

export default useRefreshToken;
