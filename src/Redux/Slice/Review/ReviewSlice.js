import { createSlice } from "@reduxjs/toolkit";
import { createReview, getAllReviewOnProduct ,deleteReview, updateReview } from "./ReviewThunk";

const initialState = {
  createReview: [],
  allReviewProduct: [],
  updateReview: [],
};

const ReviewSlice = createSlice({
  name: "review",
  initialState,
  extraReducers: {
    [createReview.fulfilled]: (state, action) => {
      state.createReview = action.payload;
    },
    [createReview.rejected]: (state, action) => {
      state.createReview = action.payload;
    },
    [getAllReviewOnProduct.fulfilled]: (state, action) => {
      state.allReviewProduct = action.payload;
    },
    [getAllReviewOnProduct.rejected]: (state, action) => {
      state.allReviewProduct = action.payload;
    },
    [deleteReview.fulfilled]:(state,action)=>{
      state.allReviewProduct.data = state?.allReviewProduct?.data?.filter((value)=>value._id !== action.payload.id)
    },
    [deleteReview.rejected]:(state,action)=>{
      state.allReviewProduct = action.payload;
    },
    [updateReview.fulfilled]:(state,action)=>{
      state.updateReview = action.payload
    },
    [updateReview.rejected]:(state,action)=>{
      state.updateReview = action.payload
    },
  },
});

export default ReviewSlice.reducer;
