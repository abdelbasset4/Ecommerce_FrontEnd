import baseUrl from '../Api/BaseURL'

const useUpdateDataWithImage = async (url, parmas) => {
    const config={
        headers:{"Content-Type":"multipart/form-data"}
    }
    const res = await baseUrl.put(url,parmas,config);
    return res;
}

const useUpdatetData = async (url, parmas) => {
    const res = await baseUrl.put(url, parmas);
    return res;
}

export  {useUpdatetData,useUpdateDataWithImage};