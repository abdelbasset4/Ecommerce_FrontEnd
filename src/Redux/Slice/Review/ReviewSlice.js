import { createSlice } from "@reduxjs/toolkit";
import { createReview, getAllReviewOnProduct ,deleteReview, updateReview } from "./ReviewThunk";

const initialState = {
  createReview: [],
  allReviewProduct: [],
  deleteReview:"idle",
  updateReview: [],
  isLoading: true,
};

const ReviewSlice = createSlice({
  name: "review",
  initialState,
  extraReducers: {
    [createReview.pending]: (state) => {
      state.isLoading = true;
    },
    [createReview.fulfilled]: (state, action) => {
      state.createReview = action.payload;
      state.isLoading = false;
    },
    [createReview.rejected]: (state, action) => {
      state.isLoading = false;
      state.createReview = action.payload;
    },
    [getAllReviewOnProduct.pending]: (state) => {
      state.isLoading = true;
    },
    [getAllReviewOnProduct.fulfilled]: (state, action) => {
      state.allReviewProduct = action.payload;
      state.isLoading = false;
    },
    [getAllReviewOnProduct.rejected]: (state, action) => {
      state.isLoading = false;
      state.allReviewProduct = action.payload;
    },
    [deleteReview.pending]:(state)=>{
      state.isLoading=true;
    },
    [deleteReview.fulfilled]:(state)=>{
      state.deleteReview = "succeeded"
      state.isLoading=false;
    },
    [deleteReview.rejected]:(state)=>{
      state.isLoading=false;
      state.deleteReview = "failed"
    },
    [updateReview.pending]:(state)=>{
      state.isLoading=true;
    },
    [updateReview.fulfilled]:(state,action)=>{
      state.updateReview = action.payload
      state.isLoading=false;
    },
    [updateReview.rejected]:(state,action)=>{
      state.updateReview = action.payload
      state.isLoading=false;
    },
  },
});

export default ReviewSlice.reducer;
