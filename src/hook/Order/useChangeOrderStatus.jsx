import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeOrderToDeliver, changeOrderToPay } from "../../Redux/Slice/Order/orderThunk";
import { useEffect } from "react";
import Notify from "../../hooks/useNotify";

const useChangeOrderStatus = (id) => {
    const dispatch = useDispatch()
    const [loadingPay, setLoadingPay] = useState(true);
    const [loadingDeliver, setLoadingDeliver] = useState(true);
    const [pay, setPay] = useState(0);
    const [deliver, setDeliver] = useState(0);

    const onChangePaid = (e) => {
        setPay(e.target.value)
    }

    const onChangeDeliver = (e) => {
        setDeliver(e.target.value)
    }


    
    const changePayOrder = async () => {

        if (pay === 'true') {
            setLoadingPay(true)
            await dispatch(changeOrderToPay(`/api/v1/orders/${id}/pay`))
            setLoadingPay(false)
        } 
    }



    const changeDeliverOrder = async () => {
        if (deliver === 'true') {
            setLoadingDeliver(true)
            await dispatch(changeOrderToDeliver(`/api/v1/orders/${id}/deliver`))
            setLoadingDeliver(false)
        }

    }

     //get order pay change
     const resOrderPay = useSelector(state => state.order.orderPayed)
     useEffect(() => {
         if (loadingPay === false) {
             if (resOrderPay && resOrderPay.status === 200) {
                 Notify("Order Pay Succes", "success")
                 setTimeout(() => {
                     window.location.reload(false)
                 }, 1000);
             } else {
                 Notify("Order Pay Error", "error")
             }
         }
     }, [loadingPay])
 
 
     //get order deliver change
     const resOrderDeliver = useSelector(state => state.order.orderDeliver)
     useEffect(() => {
         if (loadingDeliver === false) {
             if (resOrderDeliver && resOrderDeliver.status === 200) {
                 Notify("Order Deliver Succes", "success")
                 setTimeout(() => {
                     window.location.reload(false)
                 }, 1000);
             } else {
                Notify("Order Pay Error", "error")
             }
           
         }
     }, [loadingDeliver])

    return [onChangeDeliver,onChangePaid,changeDeliverOrder,changePayOrder]
}

export default useChangeOrderStatus