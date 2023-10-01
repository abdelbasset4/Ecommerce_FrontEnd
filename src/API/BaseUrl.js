import axios from "axios";

const baseUrl = axios.create({
  baseURL: "https://ecommerce-api-y8ij.onrender.com",
//   withCredentials: true,
});
// baseUrl.interceptors.request.use((req)=>{
//   if(localStorage.getItem("token")){
//       req.headers.Authorization = `Bearer ${localStorage.getItem("token")}`
//   }

//   return req;
// })
// export const axiosPrivate = axios.create({
//   baseURL: "http://localhost:3000",
//   headers: { 'Content-Type': 'application/json' },
//   withCredentials: true
// });

export default baseUrl;
