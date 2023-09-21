import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
  Rating,
} from "@material-tailwind/react";
import { StarIcon } from "@heroicons/react/24/solid";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { ToastContainer } from "react-toastify";
import useDeleteReview from "../../hook/Review/useDeleteReview";
import useUpdateReview from "../../hook/Review/useUpdateReview";
import UpdateReviewModal from "../Reviews/UpdateReviewModal";
import DeleteReviewModal from "../Reviews/DeleteReviewModal";
import { decodeToken } from "../../js/decodeToken";
export default function TestimonialCard({ review }) {
  const activeUser = decodeToken()
  const [openDelete, handleOpenDelete, handelDeleteReview] = useDeleteReview();
  const [
    openUpdate,
    handleOpenUpdate,
    handelUpdateReview,
    ratingtext,
    ratingStar,
    onChangeRateText,
    OnChangeRateStar,
  ] = useUpdateReview(review);
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

      <Card
        color="transparent"
        shadow={false}
        className=" mt-4 shadow-lg px-3 border border-gray-200">
        <CardHeader
          color="transparent"
          floated={false}
          shadow={false}
          className="mx-0 flex flex-col lg:flex-row items-center gap-4 pt-0 pb-8">
          <Avatar
            size="lg"
            variant="circular"
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
            alt="tania andrew"
          />
          <div className="flex w-full flex-col gap-0.5">
            <div className="flex flex-col lg:flex-row items-center justify-between">
              <Typography variant="h5" color="blue-gray">
                {review.user.name}
              </Typography>
              <div className="flex items-center gap-0">
                <Rating value={review.rating} readonly />
              </div>
            </div>
          </div>
        </CardHeader>
        <CardBody className="mb-6 p-0 text-center lg:text-start">
          <Typography>&quot;{review?.title}&quot;</Typography>
        </CardBody>
        {activeUser?.userId === review.user._id ? (
          <div className="flex gap-2 absolute right-4 top-4">
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
      </Card>
    </>
  );
}
