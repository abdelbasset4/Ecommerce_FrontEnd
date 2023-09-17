import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getOneCoupon,
  updateCoupon,
} from "../../Redux/Slice/Coupon/CouponThunk";
import Notify from "../../hooks/useNotify";

const useUpdateCoupon = (couponId) => {
  const dispatch = useDispatch();
  // States
  const [name, setName] = useState("");
  const [expire, setExpire] = useState("");
  const [discount, setDiscount] = useState("");
  const [loading, setLoading] = useState(true);
  function formatDate(inputDate) {
    const date = new Date(inputDate);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Month is 0-based, so add 1 and pad with '0'
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }
  const changeName = (e) => {
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
  const coupon = useSelector((state) => state.coupon.coupon);

  useEffect(() => {
    const run = async () => {
      await dispatch(getOneCoupon(`/api/v1/coupons/${couponId}`));
    };
    run();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    if (coupon.data) {
      setName(coupon.data.name);
      setExpire(formatDate(coupon.data.expire));
      setDiscount(coupon.data.discount);
    }
  }, [coupon]);

  //  submit form to update the brand
  const hundelSubmit = async (e) => {
    e.preventDefault();
    if (name === "") {
      Notify("Coupon name is required", "warn");
      return;
    }
    setLoading(true);
    let args = [
      coupon.data._id,
      {
        name,
        expire,
        discount,
      },
    ];
    await dispatch(updateCoupon(args));
    setLoading(false);
  };
  const updatedCoupon = useSelector((state) => state.coupon.updateCoupon);
  //  reset inputs and show notification
  useEffect(() => {
    if (loading === false) {
      setName("");
      setExpire("");
      setDiscount("");
      setTimeout(() => setLoading(true), 1500);
      if (updatedCoupon) {
        if (updatedCoupon.status === 200) {
          Notify("Update succsusful", "success");
        } else {
          Notify("Update error ", "error");
        }
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading]);

  return [
    name,
    changeName,
    expire,
    changeDate,
    discount,
    changeDiscount,
    hundelSubmit,
  ];
};

export default useUpdateCoupon;
