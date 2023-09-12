import { Button, Rating } from "@material-tailwind/react";
import { useState } from "react";
import ReactStars from "react-rating-stars-component";
import useAddReview from "../../hook/Review/useAddReview";
import { useParams } from "react-router-dom";
import { ToastContainer } from "react-toastify";
const AddReview = () => {
  const {id} = useParams()
  const [ratingText,,ratingChanged,ratingTextChanged,hundelSubmit,user] = useAddReview(id)
  return (
    <div >
      <div>
      <h3>{user?.username || user?.name}</h3>
      <ReactStars
      count={5}
      onChange={ratingChanged}
      size={24}
      activeColor="#ffd700"
    />
        <label
          for="first_name"
          class="block mb-2 font-medium text-lg text-gray-900 dark:text-white">
          Add Review
        </label>
        <input
          type="text"
          id="add-review"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder=" Add Review"
          required
          value={ratingText}
          onChange={ratingTextChanged}
        />
      </div>
      <Button className="bg-gray-900 text-white mt-3" onClick={hundelSubmit}>Add Review</Button>
      <ToastContainer />
    </div>
  );
};

export default AddReview;
