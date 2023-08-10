import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {getOneProduct} from "../../Redux/Slice/product/ProductThunk"
function useGetOneProduct(id) {
    const dispatch = useDispatch();
    const product = useSelector((state) => state.product.product);
    useEffect(() => {
        dispatch(getOneProduct(`/api/v1/products/${id}`));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
      
    console.log(product);
    return [product]
}

export default useGetOneProduct