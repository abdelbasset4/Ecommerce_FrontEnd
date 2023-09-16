import { Typography } from "@material-tailwind/react";
import NavBar from "../../Components/Utility/NavBar";
import Filter from "../../Components/Search/Filter";
import CheckboxListSearch from "../../Components/Search/CheckboxListSearch";
// import ColorsSearch from "../../Components/Search/ColorsSearch";
import SortingMenu from "../../Components/Search/SortingMenu";
import DrawerFilter from "../../Components/Search/DrawerFilter";
import ProductSearchList from "../../Components/Search/ProductSearchList";
import Pagination from "../../Components/Utility/Pagination";
import useGetAllSearchProducts from "../../hook/product/useGetAllSearchProducts";
import useSideBarFilter from "../../hook/Search/useSideBarFilter";
import PriceSideFilter from "../../Components/Search/PriceSideFilter";
import useGetUserFavoriteProduct from "../../hook/WishList/useGetUserFavoriteProduct";

export default function SearchPage() {
  const  [products,pageCount,getPageNumber,result,getProductData]= useGetAllSearchProducts(0)
  const [favProd] = useGetUserFavoriteProduct()
  const [allBrand,allCategory,onChangeInput,onChangePriceRange] = useSideBarFilter()

  return (
    <div>
        <NavBar/>
        <div className="mx-auto mt-4 py-2 px-4 lg:px-8 lg:py-6 lg:grid lg:grid-cols-12 gap-6">
            <div className="searchHeader hidden lg:block col-span-3">
                <div>
                <Typography
                variant="small"
                color="blue-gray"
                className="mb-4 font-bold font-lg"
                >
                Home / Search
                </Typography>
                <Filter/>
                </div>
                {
                  allCategory ? <CheckboxListSearch title="Category" searchList={allCategory} onChangeChecked={onChangeInput}/> :null
                }
                {
                  allBrand ? <CheckboxListSearch title="Brand" searchList={allBrand} onChangeChecked={onChangeInput}/> :null
                }
                <PriceSideFilter onChangeChecked={onChangePriceRange} />
            </div>
            <div className="searchHeader lg:col-span-9">
              <div className="header lg:flex lg:justify-between">
              <Typography  className=" hidden lg:block font-bold text-xl ">
              Casual Wear
              </Typography>
              <div className="flex items-center gap-8 justify-between">
                <Typography  className=" hidden lg:block text-sm text-gray-600 ">
                   {
                    products.data ? (`${result} items`):(`0 items`)
                   } 
                </Typography>
                <DrawerFilter/> 
                <SortingMenu onClick={getProductData}/>
              </div>
              </div>
              <div className="mt-9">
                <ProductSearchList products={products} favProd={favProd}/>
                <div className="mt-8">
                {
                  pageCount >1 ?(<Pagination numberPages={pageCount} onPress={getPageNumber} />):null
                }
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}
