import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Notify from "../../hooks/useNotify";
import { deleteAdress } from "../../Redux/Slice/Adresses/AdressesThunk";

const useDeleteAdress = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(!open);
    const dispatch = useDispatch()
    const handelDeleteAdress = async (id) => {
     const response = await dispatch(deleteAdress(`/api/v1/adresses/${id}`))
      setOpen(!open);
      if(response.payload.status === "success"){
          Notify("Delete succsusful", "success");
        }else{
          Notify("Delete Error", "success");    
      }
    };
    return [open,handleOpen,handelDeleteAdress]
}

export default useDeleteAdress