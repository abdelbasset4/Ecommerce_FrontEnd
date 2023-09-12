import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
} from "@material-tailwind/react";
import ReactStars from "react-rating-stars-component";
const UpdateReviewModal = ({
  open,
  handleOpen,
  handelUpdateReview,
  review,
  ratingtext,
  ratingStar,
  onChangeRateText,
  OnChangeRateStar
}) => {
  return (
    <Dialog
      open={open}
      handler={handleOpen}
      animate={{
        mount: { scale: 1, y: 0 },
        unmount: { scale: 0.9, y: -100 },
      }}>
      <DialogHeader>Update!</DialogHeader>
      <DialogBody divider>
      <ReactStars
      count={5}
      onChange={OnChangeRateStar}
      value={ratingStar}
      size={24}
      activeColor="#ffd700"
    />
        <input
          type="text"
          id="update-review"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder=" update Review"
          required
          value={ratingtext}
          onChange={onChangeRateText}
        />
      </DialogBody>
      <DialogFooter>
        <Button
          variant="text"
          color="red"
          onClick={handleOpen}
          className="mr-1">
          <span>Cancel</span>
        </Button>
        <Button
          className="bg-gray-900 text-white"
          onClick={() => handelUpdateReview()}>
          <span>Confirm</span>
        </Button>
      </DialogFooter>
    </Dialog>
  );
};

export default UpdateReviewModal;
