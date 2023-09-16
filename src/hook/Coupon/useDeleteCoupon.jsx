import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteCoupon } from "../../Redux/Slice/Coupon/CouponThunk";
import { useEffect } from "react";
import Notify from "../../hooks/useNotify";

const useDeleteCoupon = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(!open);
    const dispatch = useDispatch()
    
    const handelDeleteCoupon = async (id) => {
     const response = await dispatch(deleteCoupon(`/api/v1/coupons/${id}`))
      setOpen(!open);
      if(response.payload.status === 200){
          Notify("Delete succsusful", "success");
        }else{
          Notify("Delete Error", "success");    
      }
    };
    // const couponDeleted = useSelector((state) => state.coupon.coupon);
    // useEffect(() => {
    //     if (loading === false) {
    //     if (couponDeleted) {
          
    //     //   setTimeout(() => {
    //     //     window.location.reload();
    //     //   }, 3100);
    //     } else {
    //       Notify("Delete error ", "error");
    //     }
  
    //   }
    // // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [couponDeleted])
    return [open,handleOpen,handelDeleteCoupon]
}

export default useDeleteCoupon