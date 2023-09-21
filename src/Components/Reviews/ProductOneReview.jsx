import {
  Rating,
  Typography,
} from "@material-tailwind/react";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { ToastContainer } from "react-toastify";

import useDeleteReview from "../../hook/Review/useDeleteReview";
import DeleteReviewModal from "./DeleteReviewModal";
import UpdateReviewModal from "./UpdateReviewModal";
import useUpdateReview from "../../hook/Review/useUpdateReview";
import { decodeToken } from "../../js/decodeToken";
const ProductOneReview = ({ review }) => {

  const activeUser = decodeToken();
  const [openDelete, handleOpenDelete, handelDeleteReview] = useDeleteReview();
  const [openUpdate, handleOpenUpdate, handelUpdateReview,ratingtext,ratingStar,onChangeRateText,OnChangeRateStar] = useUpdateReview(review);
  return (
    <>
      <DeleteReviewModal
        open={openDelete}
        handleOpen={handleOpenDelete}
        handelDeleteReview={handelDeleteReview}
        review={review}
      />
      <UpdateReviewModal
        open={openUpdate}
        handleOpen={handleOpenUpdate}
        handelUpdateReview={handelUpdateReview}
        review={review}
        ratingtext={ratingtext}
        ratingStar={ratingStar}
        onChangeRateText={onChangeRateText}
        OnChangeRateStar={OnChangeRateStar}
      />
      <div className="mt-5 border-b-2 flex justify-between relative">
        <div>
          <div className="flex lg:items-center flex-col lg:flex-row gap-2 mb-3 mt-8 lg:mt-0">
            <Typography variant="h6" color="blue-gray" className="">
              {review.user.name}
            </Typography>
            <Rating value={review.rating} readonly />
            <Typography color="blue-gray" className="font-medium">
              {review.rating}.0 Rated
            </Typography>
          </div>
          <Typography variant="paragraph" color="blue-gray" className="mb-2">
            {review.title}
          </Typography>
        </div>
        {activeUser?.userId === review.user._id ? (
          <div className="flex gap-2 absolute right-0 top-0">
            <AiFillDelete
              size={"1.3rem"}
              onClick={handleOpenDelete}
              className="hover:text-red-700 cursor-pointer duration-300"
            />
            <AiFillEdit
              onClick={handleOpenUpdate}
              size={"1.3rem"}
              className="hover:text-green-700 cursor-pointer duration-300"
            />
          </div>
        ) : null}
        <ToastContainer />
      </div>
    </>
  );
};

export default ProductOneReview;
