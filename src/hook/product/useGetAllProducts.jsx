import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {getAllProducts} from "../../Redux/Slice/product/ProductThunk"
function useGetAllProducts(limit) {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.product.products);
    useEffect(() => {
        dispatch(getAllProducts(`/api/v1/products?limit=${limit}`));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
      

    return [products]
}

export default useGetAllProducts