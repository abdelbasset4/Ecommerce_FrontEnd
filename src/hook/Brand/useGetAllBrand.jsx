import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {getAllBrand} from "../../Redux/Slice/Brand/BrandThunk"
function useGetAllBrand() {
    const dispatch = useDispatch();
    const brands = useSelector(state => state.brand.brand);
    const isLoading = useSelector(state => state.brand.isLoading);
    
    useEffect(() => {
        dispatch(getAllBrand(`/api/v1/brands?limit=3`));
    }, [dispatch]);
      
      let pageCount = 0;
      if(brands.paginationResults) {pageCount = brands.paginationResults.numberPages;}
      
    const getPageNumber =(page)=>{
      dispatch(getAllBrand(`/api/v1/brands?limit=3&page=${page}`));
    }

    return [brands,isLoading,pageCount,getPageNumber]
}

export default useGetAllBrand