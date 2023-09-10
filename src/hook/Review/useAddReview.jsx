import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import Notify from "../../hooks/useNotify";
import { createReview } from "../../Redux/Slice/Review/ReviewThunk";
import { useEffect } from "react";

const useAddReview = (id) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [ratingText, setRatingText] = useState();
  const [ratingStar, setRatingStar] = useState();
  const [loading, setLoading] = useState(true);
  const ratingChanged = (rating) => {
    setRatingStar(rating);
  };
  const ratingTextChanged = (e) => {
    setRatingText(e.target.value);
  };
  let user = "";
  if (localStorage.getItem("token") !== null)
    user = jwt_decode(localStorage.getItem("token"));

  const hundelSubmit = async () => {
    if (ratingStar < 1) {
      Notify("you must add rating", "error");
    }
    if (ratingText === "") {
      Notify("you must add review", "error");
    }

    setLoading(true);
    let args = [id, {
      title: ratingText,
      rating: ratingStar,
    }];
    await dispatch(
      createReview(args)
    );
    setLoading(false);
  };
  const res = useSelector(state => state.review.createReview)
  useEffect(() => {
    if (loading === false) {
        if (res) {
            console.log(res)
            if (res.status && res.status === 403) {
              Notify("Your not allowed to review product", "error")
            } else if (res.data.errors && res.data.errors[0].msg === "You already created a review before") {
              Notify("You already created a review before", "error")
            } else if (res.status && res.status === 201) {
              Notify("Created review success", "success")
                setTimeout(() => {
                    window.location.reload(false)
                }, 2000);
            }
        }
    }
}, [loading])
  return [
    ratingText,
    ratingStar,
    ratingChanged,
    ratingTextChanged,
    hundelSubmit,
    user,
  ];
};

export default useAddReview;
