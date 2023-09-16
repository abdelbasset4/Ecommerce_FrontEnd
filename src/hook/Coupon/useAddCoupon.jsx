import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Notify from "../../hooks/useNotify";
import { createCoupon } from "../../Redux/Slice/Coupon/CouponThunk";

function useAddCoupon() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [expire, setExpire] = useState("");
  const [discount, setDiscount] = useState("");
  const [loading, setLoading] = useState(true);
  const res = useSelector((state) => state.coupon.coupon);

  const changeName = (e) => {
    e.persist();
    setName(e.target.value);
  };
  const changeDate = (e) => {
    e.persist();
    setExpire(e.target.value);
  };
  const changeDiscount = (e) => {
    e.persist();
    setDiscount(e.target.value);
  };

  const submitData = async (e) => {
    e.preventDefault();
    setLoading(true);
    await dispatch(createCoupon({
        name,
        expire,
        discount
    }));
    setLoading(false);
  };
  useEffect(() => {
    if (loading === false) {
      setName("");
      setDiscount("")
      setExpire("")
      setLoading(true);
      if (res.status === 201) {
        Notify("Added succsusful", "success");
      } 
      else if(res.status === 500){
        Notify("this coupon is alredy exsiste", "warn");

      }
      
      else {
        Notify("Added error ", "error");
      }
    }
  }, [loading, res.status]);
  return [name,changeName,expire,changeDate,discount,changeDiscount,submitData]
}

export default useAddCoupon;
