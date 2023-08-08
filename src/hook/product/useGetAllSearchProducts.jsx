import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {getAllProducts} from "../../Redux/Slice/product/ProductThunk"
function useGetAllSearchProducts() {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.product.products);
    useEffect(() => {
        dispatch(getAllProducts(`/api/v1/products?limit=12`));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
      
      let pageCount = 0;
      if(products.paginationResults) {pageCount = products.paginationResults.numberPages;console.log(pageCount);}
      
    const getPageNumber =(page)=>{
      dispatch(getAllProducts(`/api/v1/products?limit=12&page=${page}`));
    }

    return [products,pageCount,getPageNumber]
}

export default useGetAllSearchProducts