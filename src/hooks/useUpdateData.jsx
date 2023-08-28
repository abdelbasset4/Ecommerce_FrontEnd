import baseUrl from '../Api/BaseURL'

const useUpdateDataWithImage = async (url, parmas) => {
    const config={
        headers:{"Content-Type":"multipart/form-data",Authorization: `Bearer ${localStorage.getItem("token")}`}
    }
    const res = await baseUrl.put(url,parmas,config);
    return res;
}

const useUpdatetData = async (url, parmas) => {
    const config = {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
    }
    const res = await baseUrl.put(url, parmas,config);
    return res;
}

export  {useUpdatetData,useUpdateDataWithImage};