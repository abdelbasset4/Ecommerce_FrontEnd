// import { axiosPrivate } from "../Api/BaseURL";
// import { useEffect } from "react";
// import useRefreshToken from "./useRefreshToken";
// // const useAxiosPrivate = () => {
// //   const refresh = useRefreshToken();

// //   useEffect(() => {
// //     const requestInterceptor = axiosPrivate.interceptors.request.use(
// //       (config) => {
// //         if (config.headers["Authorization"]) {
// //           config.headers["Authorization"] = `Bearer ${localStorage.getItem(
// //             "token"
// //           )}`;
// //         }
// //         return config;
// //       },
// //       (error) => Promise.reject(error)
// //     );

// //     const responseInterceptor = axiosPrivate.interceptors.response.use(
// //       (response) => response,
// //       async (error) => {
// //         const prevRequest = error?.config;
// //         if (error?.response?.status === 401 && !prevRequest?.sent) {
// //           prevRequest.sent = true;
// //           const newAccessToken = await refresh();
// //           prevRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;
// //           return axiosPrivate(prevRequest);
// //         }
// //         return Promise.reject(error);
// //       }
// //     );

// //     return () => {
// //       axiosPrivate.interceptors.request.eject(requestInterceptor);
// //       axiosPrivate.interceptors.response.eject(responseInterceptor);
// //     };
// //   }, [refresh]);

// //   return axiosPrivate;
// // };

// // export default useAxiosPrivate;

// // import axios from "axios";

// // const baseURL = "http://localhost:3000";
// const useAxios = () => {
//    const refresh = useRefreshToken();
   
//   useEffect(() => {
//     const requestInterceptor = axiosPrivate.interceptors.request.use(
//       (config) => {
//         if (config.headers["Authorization"]) {
//           config.headers["Authorization"] = `Bearer ${localStorage.getItem(
//             "token"
//           )}`;
//         }
//         console.log(config);
//         return config;
//       },
//       (error) => Promise.reject(error)
//     );

//     const responseInterceptor = axiosPrivate.interceptors.response.use(
//       (response) => response,
//       async (error) => {
//         const prevRequest = error?.config;
//         if (error?.response?.status === 401 && !prevRequest?.sent) {
//           prevRequest.sent = true;
//           const newAccessToken = await refresh();
//           console.log(newAccessToken);
//           prevRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;
//           return axiosPrivate(prevRequest);
//         }
//         return Promise.reject(error);
//       }
//     );

//     return () => {
//       axiosPrivate.interceptors.request.eject(requestInterceptor);
//       axiosPrivate.interceptors.response.eject(responseInterceptor);
//     };
//   }, [refresh]);

//   return axiosPrivate;
// };


// export default useAxios;


import axios from 'axios';
import { Cookies } from 'react-cookie';

const api = axios.create({
  baseURL: 'http://localhost:3000',
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Add a response interceptor
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // If the error status is 401 and there is no originalRequest._retry flag,
    // it means the token has expired and we need to refresh it
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const refreshToken = Cookies.get('refreshToken');
        const response = await axios.post('http://localhost:3000/api/v1/auth/refresh-token', { refreshToken });
        console.log(response);

        localStorage.setItem('token', response.token);

        // Retry the original request with the new token
        originalRequest.headers.Authorization = `Bearer ${response.token}`;
        return axios(originalRequest);
      } catch (error) {
        // Handle refresh token error or redirect to login
      }
    }

    return Promise.reject(error);
  }
);

export default api