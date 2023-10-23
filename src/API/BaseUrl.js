import axios from "axios";

const baseUrl = axios.create({
  baseURL: "https://ecommerce-api-y8ij.onrender.com",
//   withCredentials: true,
});

export default baseUrl;
