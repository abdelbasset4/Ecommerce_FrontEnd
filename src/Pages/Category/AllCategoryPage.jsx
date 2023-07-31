import { useEffect } from "react";
import AllCategory from "../../Components/Category/AllCategory";
import NavBar from "../../Components/Utility/NavBar";
import Pagination from "../../Components/Utility/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategory } from "../../Redux/Slice/Category/CategoryThunk";

export default function AllCategoryPage() {
  const dispatch = useDispatch();
  const categories = useSelector(state => state.category.category);
  const isLoading = useSelector(state => state.category.isLoading);
  // const erorr = useSelector(state => state.category.erorr);
  
  useEffect(() => {
      dispatch(getAllCategory(`/api/v1/categories?limit=3`));
    }, [dispatch]);
    
    let pageCount = 0;
    if(categories.paginationResults) {pageCount = categories.paginationResults.numberPages;}
    
  const getPageNumber =(page)=>{
    dispatch(getAllCategory(`/api/v1/categories?limit=3&page=${page}`));
    console.log(page);
  }
  return (
    <div>
        <NavBar/>
        <AllCategory data={categories} isLoading={isLoading}/>
        {
          pageCount >1 ?(<Pagination numberPages={pageCount} onPress={getPageNumber} />):null
        }
        
    </div>
  )
}
