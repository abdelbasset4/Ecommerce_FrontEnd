
import AllCategory from "../../Components/Category/AllCategory";
import NavBar from "../../Components/Utility/NavBar";
import Pagination from "../../Components/Utility/Pagination";
import useGetAllCategory from "../../hook/category/useGetAllCategory";

export default function AllCategoryPage() {
  const [categories,isLoading,pageCount,getPageNumber]= useGetAllCategory()
  return (
    <div>
        <NavBar/>
        <AllCategory data={categories.data} isLoading={isLoading}/>
        {
          pageCount >1 ?(<Pagination numberPages={pageCount} onPress={getPageNumber} />):null
        }
        
    </div>
  )
}
