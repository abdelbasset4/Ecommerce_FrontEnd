import { Link } from "react-router-dom";
import useGetAllProducts from "../../hook/product/useGetAllProducts";
import CardItem from "../Utility/CardItem";
import useGetUserFavoriteProduct from "../../hook/WishList/useGetUserFavoriteProduct";
import { ToastContainer } from "react-toastify";

export default function TrendingProduct() {
    const [products] = useGetAllProducts(4)
    const [favProd] = useGetUserFavoriteProduct()
  return (
    <>
    <div className="mt-16 px-4">
        <h2 className="mb-6 text-2xl font-extrabold text-gray-900">Trending Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-3">
            {
             products?.data ? (products?.data.map((product)=>(
                    
              // eslint-disable-next-line react/jsx-key
              <CardItem product={product} key={Math.random()} favProd={favProd}/>

      ))):null
            }
        </div>
        <div className="mx-auto my-5 text-center ">
          <Link
            to="search"
            className="inline-flex bg-black items-center justify-center rounded-md border border-black py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10 hover:bg-white hover:text-black duration-300 cursor-pointer">
            View All
          </Link>
        </div>
        
    </div>
    <ToastContainer/>
    </>
  )
}
