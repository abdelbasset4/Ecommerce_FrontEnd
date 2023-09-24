import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateCartQuantity } from "../../Redux/Slice/Cart/CartThunk";
const useUpdateQuantity = (item) => {
  const [count, setCount] = useState(item?.quantity);
  function handleClickPlus() {
    setCount(count + 1);
  }
  function handleClickMinus() {
    setCount(count - 1);
  }
  // const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const handeleUpdateCartQuantity = async () => {
    let args = [
      item._id,
      {
        quantity: count,
      },
    ];
    await dispatch(updateCartQuantity(args));
    window.location.reload(false);
  };
  return [count, handleClickMinus, handleClickPlus, handeleUpdateCartQuantity];
};

export default useUpdateQuantity;
