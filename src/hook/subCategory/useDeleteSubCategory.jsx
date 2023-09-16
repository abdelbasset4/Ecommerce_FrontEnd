import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteSubCategory } from "../../Redux/Slice/SubCategory/SubCategoryThunk";
import Notify from "../../hooks/useNotify";
const useDeleteSubCategory = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);
  const dispatch = useDispatch();

  const handelDeleteSubCategory = async (id) => {
    const response = await dispatch(
      deleteSubCategory(`/api/v1/subcategories/${id}`)
    );
    setOpen(!open);
    if (response.payload.status === 200) {
      Notify("Delete succsusful", "success");
    } else {
      Notify("Delete Error", "success");
    }
    // window.location.reload()
  };

  return [open, handleOpen, handelDeleteSubCategory];
};

export default useDeleteSubCategory;
