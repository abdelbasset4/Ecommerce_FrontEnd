import useGetUserCart from "../Cart/useGetUserCart";
import Notify from "../../hooks/useNotify";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import { createCardOrder } from "../../Redux/Slice/Order/orderThunk";
const useCardOrder = (adressDetails) => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);
    const [, , , , , , cartID] = useGetUserCart();
    
    const handelCreateCardOrder = async ()=>{
        if (cartID === '0') {
            console.log(cartID);
            Notify("Your cart is empty ", "warn")
            return
        }
        setLoading(true)
        let args = [cartID,{
            shippingAdress:{
                details:adressDetails.alias,
                phone:adressDetails.phone,
                city:adressDetails.city,
                postalCode:adressDetails.postalCode
            }
        }]
        await dispatch(createCardOrder(args))
        setLoading(false)
      }
      const order = useSelector((state) => state.order.orderCardCreated);
      useEffect(() => {
        if (loading === false) {
            console.log(order);
          if (order && order.status === 'succes') {
            Notify("order created succsusful", "success");
            if (order.session.url) {
                window.open(order.session.url)
            }
        }else{
              Notify("order created error", "error");
    
          }
        }
      }, [loading]);

      return [handelCreateCardOrder]
}

export default useCardOrder