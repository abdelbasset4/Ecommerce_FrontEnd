import { useState ,useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteCategory } from "../../Redux/Slice/Category/CategoryThunk";
import Notify from "../../hooks/useNotify";
const useDeleteCategory = () => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const handleOpen = () => setOpen(!open);
  const dispatch = useDispatch()
  
  const handelDeleteCategory = async (id) => {
    setLoading(true);
   await dispatch(deleteCategory(`/api/v1/categories/${id}`))
    setOpen(!open);
    setLoading(false);
    // window.location.reload()
  };
  const categoryDeleted = useSelector((state) => state.category.deleteCategory);
  useEffect(() => {
    if (loading === false) {
      if (categoryDeleted == "succeeded") {
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
  return [open,handleOpen,handelDeleteCategory]
}

export default useDeleteCategory