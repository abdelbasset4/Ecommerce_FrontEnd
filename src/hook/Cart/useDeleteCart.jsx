import { useState } from "react";
import { useDispatch } from "react-redux";
import Notify from "../../hooks/useNotify";
import { clearAllCart, deleteItemCart } from "../../Redux/Slice/Cart/CartThunk";
const useDeleteCart = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(!open);
    const [openClear, setOpenClear] = useState(false);
    const handleOpenClear = () => setOpenClear(!openClear);
    const dispatch = useDispatch()
    
    const handelDeleteCartItem = async (id) => {
     const response = await dispatch(deleteItemCart(`/api/v1/cart/${id}`))
     console.log(response);
      setOpen(!open);
      if(response.payload.status === "success"){
        Notify("Delete succsusful", "success");
        setTimeout(() => {
            location.reload()
        }, 2000);
      }else{
        Notify("Delete Error", "error");    
    }
    };
    const handelClearCart = async () => {
     const response = await dispatch(clearAllCart(`/api/v1/cart/`))
     console.log(response);
      setOpenClear(!openClear);
      if(response.payload === ""){
        Notify("Clear Cart succsusful", "success");
        setTimeout(() => {
            location.reload()
        }, 2000);
      }else{
        Notify("Delete Error", "error");    
    }
    };
  
    return [open,handleOpen,handelDeleteCartItem,openClear,handleOpenClear,handelClearCart]
}

export default useDeleteCart