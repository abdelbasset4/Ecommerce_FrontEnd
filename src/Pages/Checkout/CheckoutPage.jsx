import PaymentMethod from '../../Components/Checkout/PaymentMethod'
import NavBar from '../../Components/Utility/NavBar'

export default function CheckoutPage() {
  return (
    <div>
        <NavBar/>
        <div className='px-4 '>
            <PaymentMethod/>
        </div>
    </div>
  )
}
