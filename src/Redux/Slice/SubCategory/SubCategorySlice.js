import { createSlice } from "@reduxjs/toolkit";
import {
  createSubCategory,
  getAllSubCategory,
  getAllSubCategoryOnCatID,
  deleteSubCategory,
  updateSubCategory,
  getOneSubCategory,
} from "./SubCategoryThunk";

const initialState = {
  subCategory: [],
  updateSubCategory: [],
};

const subCategorySlice = createSlice({
  name: "subCategory",
  initialState,
  extraReducers: {
    [createSubCategory.fulfilled]: (state, action) => {
      state.subCategory = action.payload;
    },
    [createSubCategory.rejected]: (state, action) => {
      state.subCategory = action.payload;
    },
    [getAllSubCategoryOnCatID.fulfilled]: (state, action) => {
      state.subCategory = action.payload;
    },
    [getAllSubCategoryOnCatID.rejected]: (state, action) => {
      state.subCategory = action.payload;
    },
    [getOneSubCategory.fulfilled]: (state, action) => {
      state.subCategory = action.payload;
    },
    [getOneSubCategory.rejected]: (state, action) => {
      state.subCategory = action.payload;
    },
    [getAllSubCategory.fulfilled]: (state, action) => {
      state.subCategory = action.payload;
    },
    [getAllSubCategory.rejected]: (state, action) => {
      state.subCategory = action.payload;
    },
    [deleteSubCategory.fulfilled]: (state, action) => {
      state.subCategory.data = state?.subCategory?.data?.filter(
        (value) => value._id !== action.payload.id
      );
    },
    [deleteSubCategory.rejected]: (state, action) => {
      state.subCategory = action.payload;
    },
    [updateSubCategory.fulfilled]: (state, action) => {
      state.updateSubCategory = action.payload;
    },
    [updateSubCategory.rejected]: (state, action) => {
      state.updateSubCategory = action.payload;
    },
  },
});

export default subCategorySlice.reducer;
