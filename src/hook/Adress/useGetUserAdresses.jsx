import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllAdresses } from "../../Redux/Slice/Adresses/AdressesThunk";
const useGetUserAdresses = () => {
    const dispatch = useDispatch();
    const adresses = useSelector(state => state.adress.adress);
    
    useEffect(() => {
        dispatch(getAllAdresses(`/api/v1/adresses`));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch]);
    return [adresses]
}

export default useGetUserAdresses