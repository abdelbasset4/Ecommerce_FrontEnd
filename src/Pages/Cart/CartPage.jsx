import CartList from "../../Components/Cart/CartList";
import Coupon from "../../Components/Cart/Coupon";
import NavBar from "../../Components/Utility/NavBar";

export default function CartPage() {
  return (
    <div>
        <NavBar/>
        <div className="relative grid grid-cols-12 px-4 mt-9">
            <div className="col-span-12 lg:col-span-8">
                <CartList className=""/>
            </div>
            <div className="fixed lg:relative bg-boxdark-2 lg:bg-transparent w-full px-2 lg:px-0 bottom-0 left-0 lg:block lg:col-span-4">
                <Coupon />
            </div>
            
        </div>
    </div>
  )
}
