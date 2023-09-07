
import axios from "axios";
import { setupInterceptorsTo } from "./interceptors";
// import setupInterceptorsTo

const api = setupInterceptorsTo(
  axios.create({
    baseURL: "http://localhost:3000",
    headers: {
      "Content-Type": "application/json",
    },
  })
);

export default api;