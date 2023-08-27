import { createSlice } from "@reduxjs/toolkit";
import {
  createSubCategory,
  getAllSubCategoryOnCatID,
} from "./SubCategoryThunk";

const initialState = {
  subCategory: [],
  isLoading: true,
};

const subCategorySlice = createSlice({
  name: "subCategory",
  initialState,
  extraReducers: {
    [createSubCategory.pending]: (state) => {
      state.isLoading = true;
    },
    [createSubCategory.fulfilled]: (state, action) => {
      state.subCategory = action.payload;
      state.isLoading = false;
    },
    [createSubCategory.rejected]: (state, action) => {
      state.isLoading = false;
      state.subCategory = action.payload;
    },
    [getAllSubCategoryOnCatID.pending]: (state) => {
      state.isLoading = true;
    },
    [getAllSubCategoryOnCatID.fulfilled]: (state, action) => {
      state.subCategory = action.payload;
      state.isLoading = false;
    },
    [getAllSubCategoryOnCatID.rejected]: (state, action) => {
      state.isLoading = false;
      state.subCategory = action.payload;
    },
  },
});

export default subCategorySlice.reducer;
