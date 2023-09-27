import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserCart } from "../../Redux/Slice/Cart/CartThunk";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Notify from "../../hooks/useNotify";
const useGetUserCart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const [loading, setLoading] = useState(true);
  const [numberItem, setNumberItem] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [afterCouponPrice, setAfterCouponPrice] = useState(0);
  const [coupon, setCoupon] = useState("");
  const [cartItem, setCartItem] = useState([]);
  const [cartID, setCartID] = useState("0");

  useEffect(() => {
    const get = async () => {
      setLoading(true);
      await dispatch(getUserCart(`/api/v1/cart`));
      setLoading(false);
    };
    get();
  }, []);
  const cart = useSelector((state) => state.cart.cart);
  useEffect(() => {
    if (loading === false) {
      if (cart && cart.status === "success") {
        setNumberItem(cart.numOfCartItems);
        setCartItem(cart.data.cartItems);
        setTotalPrice(cart.data.totalCartPrice);
        setCartID(cart.data._id)
        if (cart.data.coupon) {
          setCoupon(cart.data.coupon);
        } else {
          setCoupon("");
        }
        if (cart.data.priceAfterDiscount) {
          setAfterCouponPrice(cart.data.priceAfterDiscount);
        } else {
          setAfterCouponPrice("");
        }
      } else {
        setNumberItem(0);
        setCartID("0")
        setCartItem([]);
        setTotalPrice(0);
        setCoupon("")
        setAfterCouponPrice("");
      }
    }
  }, [loading]);
  const handelChackoutPage = ()=>{
    cartItem?.length >0 ? navigate('/checkout') : Notify("Please add product to cart","warn")
  }
  return [numberItem, cartItem, totalPrice,coupon,afterCouponPrice,handelChackoutPage,cartID];
};

export default useGetUserCart;
