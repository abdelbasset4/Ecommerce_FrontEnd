import { createSlice } from "@reduxjs/toolkit";
import {
  createSubCategory,
  getAllSubCategory,
  getAllSubCategoryOnCatID,
  deleteSubCategory,
  updateSubCategory
} from "./SubCategoryThunk";

const initialState = {
  subCategory: [],
  updateSubCategory:[],
  deleteSubCategory:"idle",
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
    [getAllSubCategory.pending]: (state) => {
      state.isLoading = true;
    },
    [getAllSubCategory.fulfilled]: (state, action) => {
      state.subCategory = action.payload;
      state.isLoading = false;
    },
    [getAllSubCategory.rejected]: (state, action) => {
      state.isLoading = false;
      state.subCategory = action.payload;
    },
    [deleteSubCategory.pending]:(state)=>{
      state.isLoading=true;
    },
    [deleteSubCategory.fulfilled]:(state)=>{
      state.deleteSubCategory = "succeeded"
      state.isLoading=false;
    },
    [deleteSubCategory.rejected]:(state)=>{
      state.isLoading=false;
      state.deleteSubCategory = "failed"
    },
    [updateSubCategory.pending]:(state)=>{
      state.isLoading=true;
    },
    [updateSubCategory.fulfilled]:(state,action)=>{
      state.updateSubCategory = action.payload
      state.isLoading=false;
    },
    [updateSubCategory.rejected]:(state,action)=>{
      state.isLoading=false;
      state.updateSubCategory = action.payload
    },
  },
});

export default subCategorySlice.reducer;
