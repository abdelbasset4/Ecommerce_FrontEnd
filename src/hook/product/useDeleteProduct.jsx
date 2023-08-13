import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct } from "../../Redux/Slice/product/ProductThunk";
import { useEffect } from "react";
import Notify from "../../hooks/useNotify";

function useDeleteProduct() {
    const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const handleOpen = () => setOpen(!open);
  const dispatch = useDispatch()

  const handelDeleteProduct = async (id) => {
    setLoading(true);
   await dispatch(deleteProduct(`/api/v1/products/${id}`))
    setOpen(!open);
    setLoading(false);
    // window.location.reload()
  };
  const productDeleted = useSelector((state) => state.product.deleteProduct);
  useEffect(() => {
    if (loading === false) {
      if (productDeleted == "succeeded") {
        Notify("Delete succsusful", "success");
        setTimeout(() => {
          window.location.reload();
        }, 3100);
      } else {
        Notify("Delete error ", "error");
      }

    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading])
  return [open,handleOpen,handelDeleteProduct]
}

export default useDeleteProduct