import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Notify from "../../hooks/useNotify";
import { AddToCart } from "../../Redux/Slice/Cart/CartThunk";
const useAddToCart = (productId, item) => {
  const dispatch = useDispatch();

  const [colorIndex, setColorIndex] = useState("");
  const [colorValue, setColorValue] = useState("");
  const [loading, setLoading] = useState(true);
  const checkColor = (index, color) => {
    setColorIndex(index);
    setColorValue(color);
  };

  const hundelAddToCart =async () => {
    if (item.colors.length > 0) {
      if (colorValue === "") {
        Notify("please select a color first", "warn");
        return;
      }
    } else {
        setColorValue("")
    }
    setLoading(true);
    await dispatch(AddToCart({
        productId,
        color:colorValue
    }))
    setLoading(false);

  };
  const cart = useSelector((state)=>state.cart.cart)
  
  useEffect(() => {
    if(loading ===false){
        console.log(cart);
        if(cart.status ===200){
            Notify("Added to cart succsusful", "success");
            setTimeout(() => {
              location.reload()
            }, 2000);
        }else if(cart.status ===401){
            Notify("You are not login please login first", "error");
        }else{
            Notify("error with add to cart", "error");
        }
    }
        
    
  }, [loading])
  

  return [colorIndex, checkColor, hundelAddToCart];
};

export default useAddToCart;
