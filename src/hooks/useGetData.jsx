import baseUrl from '../Api/BaseURL'

const useGetData = async (url, parmas) => {
    const res = await baseUrl.get(url, parmas);
    return res.data;
}

export default useGetData;