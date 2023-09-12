import { useState ,useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";

import Notify from "../../hooks/useNotify";
import { deleteReview } from "../../Redux/Slice/Review/ReviewThunk";
const useDeleteReview = () => {
  const [openDelete, setOpenDelete] = useState(false);
  const [loading, setLoading] = useState(true);
  const handleOpenDelete = () => setOpenDelete(!openDelete);
  const dispatch = useDispatch()
  
  const handelDeleteReview = async (id) => {
    setLoading(true);
   await dispatch(deleteReview(`/api/v1/reviews/${id}`))
    setOpenDelete(!openDelete);
    setLoading(false);
    // window.location.reload()
  };
  const reviewDeleted = useSelector((state) => state.review.deleteReview);
  useEffect(() => {
    if (loading === false) {
      if (reviewDeleted == "succeeded") {
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
  return [openDelete,handleOpenDelete,handelDeleteReview]
}

export default useDeleteReview