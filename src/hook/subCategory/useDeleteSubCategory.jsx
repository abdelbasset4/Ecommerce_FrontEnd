import { useState ,useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteSubCategory } from "../../Redux/Slice/SubCategory/SubCategoryThunk";
import Notify from "../../hooks/useNotify";
const useDeleteSubCategory = () => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const handleOpen = () => setOpen(!open);
  const dispatch = useDispatch()
  
  const handelDeleteSubCategory = async (id) => {
    setLoading(true);
   await dispatch(deleteSubCategory(`/api/v1/subcategories/${id}`))
    setOpen(!open);
    setLoading(false);
    // window.location.reload()
  };
  const subCategoryDeleted = useSelector((state) => state.subCategory.deleteSubCategory);
  useEffect(() => {
    if (loading === false) {
      if (subCategoryDeleted == "succeeded") {
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
  return [open,handleOpen,handelDeleteSubCategory]
}

export default useDeleteSubCategory