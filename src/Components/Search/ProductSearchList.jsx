import ProductSearchCard from "./ProductSearchCard";


// eslint-disable-next-line react/prop-types
export default function ProductSearchList({products}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
    {
      // eslint-disable-next-line react/prop-types
      products.data ?(products.data.map((product) => (
        // eslint-disable-next-line react/jsx-key
        <ProductSearchCard product={product}/>
    ))):null
    }
    </div>
  )
}
