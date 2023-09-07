import axios, {
    AxiosError,
    AxiosInstance,
    AxiosRequestConfig,
    AxiosResponse,
  } from "axios";
  import  Cookies  from 'js-cookie';
  const API_URL = "http://localhost:3000";
  
  const onRequest = (config: AxiosRequestConfig): AxiosRequestConfig => {
    const token = localStorage.getItem("token");
    config.headers = config.headers ?? {};
    config.headers["Authorization"] = `Bearer ${token}`;
  
    return config;
  };
  
  const onRequestError = (error: AxiosError): Promise<AxiosError> => {
    return Promise.reject(error);
  };
  
  const onResponse = (response: AxiosResponse): AxiosResponse => {
    return response;
  };
  
  const onResponseError = async (error: AxiosError): Promise<AxiosError> => {
    if (error.response) {
      // Access Token was expired
      if (
        error.response && error.response.status === 401
      ) {
  
        try {
          const refreshToken = Cookies.get('refreshToken');
          const rs = await axios.post(`${API_URL}/api/v1/auth/refresh-token`, {
            refreshToken:refreshToken,
          });
          console.log(refreshToken);
          
          const { token } = rs.data;
  
          localStorage.setItem("token", token);
  
        } catch (_error) {
          return Promise.reject(_error);
        }
      }
    }
    return Promise.reject(error);
  };
  
  export const setupInterceptorsTo = (
    axiosInstance: AxiosInstance
  ): AxiosInstance => {
    axiosInstance.interceptors.request.use(onRequest, onRequestError);
    axiosInstance.interceptors.response.use(onResponse, onResponseError);
    return axiosInstance;
  };