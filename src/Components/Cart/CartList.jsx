import CartItem from "./CartItem";

export default function CartList() {
  return (
    <div>
        <h2 className="mb-6 text-2xl font-extrabold text-gray-900">Shopping cart</h2>

        <CartItem/>
        <CartItem/>
        <CartItem/>
        <CartItem/>
    </div>
  )
}
