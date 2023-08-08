import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {getAllProducts} from "../../Redux/Slice/product/ProductThunk"
function useGetAllProducts() {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.product.products);
    useEffect(() => {
        dispatch(getAllProducts(`/api/v1/products`));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
      
    //   let pageCount = 0;
    //   if(products.paginationResults) {pageCount = products.paginationResults.numberPages;}
      
    // const getPageNumber =(page)=>{
    //   dispatch(getAllBrand(`/api/v1/brands?limit=3&page=${page}`));
    // }

    return [products]
}

export default useGetAllProducts