import { useGetDataToken } from "./useGetData";

export async function LoaderFunction (){
    const res = await useGetDataToken(`/api/v1/users/getMe`);
    return res
}