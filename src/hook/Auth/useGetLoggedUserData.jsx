import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetLoggedUser } from "../../Redux/Slice/Auth/AuthThunk";
const useGetLoggedUserData = () => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.auth.user);
    
    useEffect(() => {
        dispatch(GetLoggedUser());
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch]);


    return [user]
}

export default useGetLoggedUserData