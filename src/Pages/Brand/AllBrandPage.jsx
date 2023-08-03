
import AllBrand from "../../Components/Brand/AllBrand";
import NavBar from "../../Components/Utility/NavBar";
import Pagination from "../../Components/Utility/Pagination";
import useGetAllBrand from "../../hook/Brand/useGetAllBrand";

export default function AllBrandPage() {
  const [brands,isLoading,pageCount,getPageNumber]= useGetAllBrand()
  return (
    <div>
        <NavBar/>
        <AllBrand data={brands.data} isLoading={isLoading}/>
        {
          pageCount >1 ?(<Pagination numberPages={pageCount} onPress={getPageNumber} />):null
        }   
    </div>
  )
}