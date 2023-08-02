import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategory } from "../../Redux/Slice/Category/CategoryThunk";
function useGetAllCategory() {
    const dispatch = useDispatch();
    const categories = useSelector(state => state.category.category);
    const isLoading = useSelector(state => state.category.isLoading);
    
    useEffect(() => {
        dispatch(getAllCategory(`/api/v1/categories?limit=3`));
    }, [dispatch]);
      
      let pageCount = 0;
      if(categories.paginationResults) {pageCount = categories.paginationResults.numberPages;}
      
    const getPageNumber =(page)=>{
      dispatch(getAllCategory(`/api/v1/categories?limit=3&page=${page}`));
    }

    return [categories,isLoading,pageCount,getPageNumber]
}

export default useGetAllCategory