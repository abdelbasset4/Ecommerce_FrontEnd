import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {getAllBrand} from "../../Redux/Slice/Brand/BrandThunk"
function useGetAllBrand(limit) {
    const dispatch = useDispatch();
    const brands = useSelector(state => state.brand.brand);
    const isLoading = useSelector(state => state.brand.isLoading);
    
    useEffect(() => {
        dispatch(getAllBrand(`/api/v1/brands?limit=${limit}`));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch]);
      let pageCount = 0;
      if(brands?.paginationResults) {pageCount = brands?.paginationResults?.numberPages;}
      
    const getPageNumber =(page)=>{
      dispatch(getAllBrand(`/api/v1/brands?limit=${limit}&page=${page}`));
    }

    return [brands,isLoading,pageCount,getPageNumber]
}

export default useGetAllBrand