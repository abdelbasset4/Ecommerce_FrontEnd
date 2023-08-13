import baseUrl from '../Api/BaseURL'

const useDeleteData = async (url, parmas) => {
    const res = await baseUrl.delete(url, parmas);
    return res.data;
}

export default useDeleteData;