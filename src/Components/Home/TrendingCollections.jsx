import collection1 from "../../assets/collections/collection1.jpg"
import collection2 from "../../assets/collections/collection2.jpg"
import collection3 from "../../assets/collections/collection3.jpg"
export default function TrendingCollections() {
  return (
    <div className="mt-16 px-4">
        <h2 className="mb-6 text-2xl font-extrabold text-gray-900">Trending Collections</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 h-[550px]">
            <div className="group relative cursor-pointer duration-300 hover:-translate-y-2 overflow-hidden">
                <img src={collection1} alt="" className="absolute top-0 left-0 object-cover w-full h-full rounded-xl"/>
                <div className="absolute -bottom-full right-0 bg-white p-5 z-30 rounded-tl-lg duration-200 group-hover:bottom-0">
                    View Collection
                </div>
            </div>
            <div className="group relative cursor-pointer duration-300 hover:-translate-y-2 overflow-hidden">
                <img src={collection2} alt="" className="absolute top-0 left-0 object-cover w-full h-full rounded-xl"/>
                <div className="absolute -bottom-full right-0 bg-white p-5 z-30 rounded-tl-lg duration-200 group-hover:bottom-0">
                    View Collection
                </div>
            </div>
            <div className="group relative cursor-pointer duration-300 hover:-translate-y-2 overflow-hidden">
                <img src={collection3} alt="" className="absolute top-0 left-0 object-cover w-full h-full rounded-xl"/>
                <div className="absolute -bottom-full right-0 bg-white p-5 z-30 rounded-tl-lg duration-200 group-hover:bottom-0">
                    View Collection
                </div>
            </div>
            
        </div>
    
    </div>
  )
}
