import useGetUserCart from "../../hook/Cart/useGetUserCart";
import CartItem from "./CartItem";

export default function CartList() {
  const [,cartItem] = useGetUserCart()
  return (
    <div>
        <h2 className="mb-6 text-2xl font-extrabold text-gray-900">Shopping cart</h2>
        {
          cartItem ? (
            cartItem?.map((item,index)=><CartItem product={item} key={index} />)
          ):(<h1>There are no product from this cart</h1>)
        }
    </div>
  )
}
