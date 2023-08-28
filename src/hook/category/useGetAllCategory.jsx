import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategory } from "../../Redux/Slice/Category/CategoryThunk";
function useGetAllCategory(limit) {
    const dispatch = useDispatch();
    const categories = useSelector(state => state.category.category);
    const isLoading = useSelector(state => state.category.isLoading);
    
    useEffect(() => {
        dispatch(getAllCategory(`/api/v1/categories?limit=${limit}`));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch]);
      
      let pageCount = 0;
      if(categories.paginationResults) {pageCount = categories.paginationResults.numberPages;}
      
    const getPageNumber =(page)=>{
      dispatch(getAllCategory(`/api/v1/categories?limit=${limit}&page=${page}`));
    }

    return [categories,isLoading,pageCount,getPageNumber]
}

export default useGetAllCategory