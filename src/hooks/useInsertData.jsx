import baseUrl from "../Api/BaseURL";

const useInsertDataWithImage = async (url, parmas) => {
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    withCredentials: true,
  };
  const res = await baseUrl.post(url, parmas, config);
  return res;
};

const useInsertData = async (url, parmas) => {
  let config = null
  if(localStorage.getItem("token")){
    config = {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      withCredentials: true,
    };
  }
  
  const res = await baseUrl.post(url, parmas,config);
  console.log(res);
  return res;
};

export { useInsertData, useInsertDataWithImage };
