import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {getAllSubCategory} from "../../Redux/Slice/SubCategory/SubCategoryThunk"
const useGetAllSubCategory = (limit) => {
  const dispatch = useDispatch();
    const subcategories = useSelector(state => state.subCategory.subCategory);
    const isLoading = useSelector(state => state.subCategory.isLoading);
    
    useEffect(() => {
        dispatch(getAllSubCategory(`/api/v1/subcategories?limit=${limit}`));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch]);
      
      let pageCount = 0;
      if(subcategories.paginationResults) {pageCount = subcategories.paginationResults.numberPages;}
      
    const getPageNumber =(page)=>{
      dispatch(getAllSubCategory(`/api/v1/subcategories?limit=${limit}&page=${page}`));
    }
    return [subcategories,isLoading,pageCount,getPageNumber]
}

export default useGetAllSubCategory