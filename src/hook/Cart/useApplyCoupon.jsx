import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Notify from "../../hooks/useNotify";
import { applyCoupon } from "../../Redux/Slice/Cart/CartThunk";
const useApplyCoupon = () => {

    const [couponName, setCouponName] = useState("");
    const [loading, setLoading] = useState(true);
    const onChangeCouponName = (e) => {
        setCouponName(e);
    };
    const dispatch = useDispatch();
    
    const handelApplyCoupon = async () => {
        if (couponName === "") {
            Notify("Enter a valid Coupon  ", "warn")
            return
        }
      setLoading(true);
      await dispatch(applyCoupon({
        coupon:couponName
      }));
      setLoading(false);
      // window.location.reload()
    };
    const res = useSelector((state) => state.cart.cart);
    useEffect(() => {
      if (loading === false) {
        console.log(res);
        if (res && res.status==200) {
          Notify("apply coupon succsusful", "success");
          setTimeout(() => {
            location.reload();
          }, 2100);
        } else {
          Notify("coupon invalid  ", "error");
          setTimeout(() => {
            location.reload();
          }, 2100)
        }
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [loading]);
    return [couponName,onChangeCouponName,handelApplyCoupon];
}

export default useApplyCoupon