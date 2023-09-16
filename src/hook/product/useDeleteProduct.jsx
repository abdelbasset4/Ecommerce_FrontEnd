import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct } from "../../Redux/Slice/product/ProductThunk";
import Notify from "../../hooks/useNotify";

function useDeleteProduct() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);
  const dispatch = useDispatch();

  const handelDeleteProduct = async (id) => {
    const response = await dispatch(deleteProduct(`/api/v1/products/${id}`));
    setOpen(!open);
    if (response.payload.status === 200) {
      Notify("Delete succsusful", "success");
    } else {
      Notify("Delete Error", "success");
    }
  };
  return [open, handleOpen, handelDeleteProduct];
}

export default useDeleteProduct;
