import { createSlice } from '@reduxjs/toolkit'
import { createReview } from './ReviewThunk';


const initialState = {
    createReview: [],
    allReviewProduct: [],
    deleteReview: [],
    updateReview: [],
    isLoading: true,
}

const ReviewSlice = createSlice({
    name: 'review',
  initialState,
  extraReducers:{
    [createReview.pending]:(state)=>{
      state.isLoading=true;
    },
    [createReview.fulfilled]:(state,action)=>{
      state.createReview = action.payload
      state.isLoading=false;
    },
    [createReview.rejected]:(state,action)=>{
      state.isLoading=false;
      state.createReview=action.payload;
    },

  }
})


export default ReviewSlice.reducer