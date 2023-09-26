import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {getAllBrand} from "../../Redux/Slice/Brand/BrandThunk"
import { useState } from "react";
function useGetAllBrand(limit) {
    const dispatch = useDispatch();
    const brands = useSelector(state => state.brand.brand);
    const [isLoading, setIsLoading] = useState(false);
    
    useEffect(() => {
        const getBrands = async ()=>{

          await dispatch(getAllBrand(`/api/v1/brands?limit=${limit}`));
        }
        setIsLoading(true);
        getBrands()
        setIsLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch]);
      let pageCount = 0;
      if(brands?.paginationResults) {pageCount = brands?.paginationResults?.numberPages;}
      
    const getPageNumber =async (page)=>{
      setIsLoading(true);
     await dispatch(getAllBrand(`/api/v1/brands?limit=${limit}&page=${page}`));
     setIsLoading(false);
    }

    return [brands,isLoading,pageCount,getPageNumber]
}

export default useGetAllBrand