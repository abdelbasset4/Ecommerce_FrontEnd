import { useState ,useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteBrand } from "../../Redux/Slice/Brand/BrandThunk";
import Notify from "../../hooks/useNotify";
const useDeleteBrand = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);
  const dispatch = useDispatch()
  
  const handelDeleteBrand = async (id) => {
   const response = await dispatch(deleteBrand(`/api/v1/brands/${id}`))
    setOpen(!open);
    if(response.payload.status === 200){
      Notify("Delete succsusful", "success");
    }else{
      Notify("Delete Error", "success");    
  }
    // window.location.reload()
  };
  // const brandDeleted = useSelector((state) => state.brand.deleteBrand);
  // useEffect(() => {
  //   if (loading === false) {
  //     if (brandDeleted == "succeeded") {
  //       Notify("Delete succsusful", "success");
  //       setTimeout(() => {
  //         window.location.reload();
  //       }, 3100);
  //     } else {
  //       Notify("Delete error ", "error");
  //     }

  //   }
  // // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [loading])
  return [open,handleOpen,handelDeleteBrand]
}

export default useDeleteBrand