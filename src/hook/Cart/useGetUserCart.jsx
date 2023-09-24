import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserCart } from "../../Redux/Slice/Cart/CartThunk";
import { useState } from "react";
const useGetUserCart = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [numberItem, setNumberItem] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [afterCouponPrice, setAfterCouponPrice] = useState(0);
  const [coupon, setCoupon] = useState("");
  const [cartItem, setCartItem] = useState([]);

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
      console.log(cart);
      if (cart && cart.status === "success") {
        setNumberItem(cart.numOfCartItems);
        setCartItem(cart.data.cartItems);
        setTotalPrice(cart.data.totalCartPrice);
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
        setCartItem([]);
        setTotalPrice(0);
        setCoupon("")
        setAfterCouponPrice("");
      }
    }
  }, [loading]);
  return [numberItem, cartItem, totalPrice,coupon,afterCouponPrice];
};

export default useGetUserCart;
