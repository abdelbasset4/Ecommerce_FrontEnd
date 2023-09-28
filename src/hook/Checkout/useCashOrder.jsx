import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOneAdress } from "../../Redux/Slice/Adresses/AdressesThunk";
import useGetUserCart from "../Cart/useGetUserCart";
import { createCashOrder } from "../../Redux/Slice/Order/orderThunk";
import Notify from "../../hooks/useNotify";
import { useNavigate } from "react-router-dom";
const useCashOrder = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const [loading, setLoading] = useState(true);
  const [orderloading, setOrderLoading] = useState(true);
  const [adressDetails, setAdressDetails] = useState([]);
  const [, , , , , , cartID] = useGetUserCart();
  const changeAdress = (e) => {
    setAdressDetails([]);
    if (e.target.value !== "0") {
      get(e.target.value);
    }
  };

  const get = async (id) => {
    setLoading(true);
    await dispatch(getOneAdress(`/api/v1/adresses/${id}`));
    setLoading(false);
  };
  const resAddress = useSelector((state) => state.adress.oneAdress);
  useEffect(() => {
    if (loading === false) {
      if (resAddress && resAddress.status === "success") {
        setAdressDetails(resAddress.data);
      }
    }
  }, [loading]);

  const handelCreateCashOrder = async ()=>{
    setOrderLoading(true)
    let args = [cartID,{
        shippingAdress:{
            details:adressDetails.alias,
            phone:adressDetails.phone,
            city:adressDetails.city,
            postalCode:adressDetails.postalCode
        }
    }]
    await dispatch(createCashOrder(args))
    setOrderLoading(false)
  }
  const order = useSelector((state) => state.order.orderCreated);
  useEffect(() => {
    if (loading === false) {
      if (order && order.status === 200) {
        Notify("order created succsusful", "success");
        setTimeout(() => {
            navigate("/myorders")
        }, 2000);
    }else{
          Notify("order created error", "error");

      }
    }
  }, [orderloading]);
  return [changeAdress, adressDetails,handelCreateCashOrder];
};

export default useCashOrder;
