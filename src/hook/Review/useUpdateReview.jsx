import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Notify from "../../hooks/useNotify";
import { updateReview } from "../../Redux/Slice/Review/ReviewThunk";
const useUpdateReview = (review) => {
  const [openUpdate, setOpenUpdate] = useState(false);
  const [ratingtext, setRatingText] = useState(review?.title);
  const [ratingStar, setRatingStar] = useState(review?.rating);
  const [loading, setLoading] = useState(true);
  const handleOpenUpdate = () => {
    setOpenUpdate(!openUpdate);
  };
  const dispatch = useDispatch();
  const onChangeRateText = (e) => {
    setRatingText(e.target.value);
  };
  const OnChangeRateStar = (val) => {
    setRatingStar(val);
  };
  const handelUpdateReview = async () => {
    setLoading(true);
    const args = [review._id,{
      title:ratingtext,
      rating:ratingStar
    }]
    await dispatch(updateReview(args));
    setOpenUpdate(!openUpdate);
    setLoading(false);
    // window.location.reload()
  };
  const reviewUpdated = useSelector((state) => state.review.updateReview);
  useEffect(() => {
    if (loading === false) {
      if (reviewUpdated && reviewUpdated.status==200) {
        Notify("update succsusful", "success");
        setTimeout(() => {
          window.location.reload();
        }, 3100);
      } else {
        Notify("update error ", "error");
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading]);
  return [openUpdate, handleOpenUpdate, handelUpdateReview,ratingtext,ratingStar,onChangeRateText,OnChangeRateStar];
};

export default useUpdateReview;
