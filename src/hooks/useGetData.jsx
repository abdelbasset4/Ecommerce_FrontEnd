import baseUrl from "../API/BaseUrl";

// import baseUrl from '../Api/BaseUrl'
const useGetData = async (url, parmas) => {
    const res = await baseUrl.get(url, parmas);
    return res.data;
}



const useGetDataToken = async (url) => {
    // const access_token = localStorage.getItem("token")
    // baseUrl.defaults.headers.common['Authorization'] = `Bearer ${access_token}` 
    const config = {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
    }
    const res = await baseUrl.get(url,config);
    return res.data;
}

export  {useGetData, useGetDataToken};