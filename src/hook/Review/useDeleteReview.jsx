import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Notify from "../../hooks/useNotify";
import { deleteReview } from "../../Redux/Slice/Review/ReviewThunk";
const useDeleteReview = () => {
  const [openDelete, setOpenDelete] = useState(false);
  const handleOpenDelete = () => setOpenDelete(!openDelete);
  const dispatch = useDispatch();

  const handelDeleteReview = async (id) => {
    const response = await dispatch(deleteReview(`/api/v1/reviews/${id}`));
    setOpenDelete(!openDelete);
    if (response.payload.status === 200) {
      Notify("Delete succsusful", "success");
    } else {
      Notify("Delete Error", "success");
    }
  };
  return [openDelete, handleOpenDelete, handelDeleteReview];
};

export default useDeleteReview;
