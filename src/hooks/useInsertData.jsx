import baseUrl from '../Api/BaseURL'

const useInsertDataWithImage = async (url, parmas) => {
    const config={
        headers:{"Content-Type":"multipart/form-data",Authorization: `Bearer ${localStorage.getItem("token")}`}
    }
    const res = await baseUrl.post(url,parmas,config);
    return res;
}

const useInsertData = async (url, parmas) => {
    const config = {
        headers: {  Authorization: `Bearer ${localStorage.getItem("token")}` },
        withCredentials: true
    }
    const res = await baseUrl.post(url, parmas,config);
    return res;
}

export  {useInsertData,useInsertDataWithImage};