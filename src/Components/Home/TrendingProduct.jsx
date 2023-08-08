import useGetAllProducts from "../../hook/product/useGetAllProducts";
import CardItem from "../Utility/CardItem";

export default function TrendingProduct() {
    const [products] = useGetAllProducts()
  return (
    <div className="mt-16 px-4">
        <h2 className="mb-6 text-2xl font-extrabold text-gray-900">Trending Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-3">
            {
             products.data ? (products.data.map((product)=>(
                    
              // eslint-disable-next-line react/jsx-key
              <CardItem product={product} key={Math.random()}/>

      ))):null
            }
        </div>
    </div>
  )
}
