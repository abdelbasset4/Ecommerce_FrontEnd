import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteCategory } from "../../Redux/Slice/Category/CategoryThunk";
import Notify from "../../hooks/useNotify";
const useDeleteCategory = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);
  const dispatch = useDispatch();

  const handelDeleteCategory = async (id) => {

    const response = await dispatch(deleteCategory(`/api/v1/categories/${id}`));
    setOpen(!open);
    if (response.payload.status === 200) {
      Notify("Delete succsusful", "success");
    } else {
      Notify("Delete Error", "success");
    }
    // window.location.reload()
  };

  return [open, handleOpen, handelDeleteCategory];
};

export default useDeleteCategory;
