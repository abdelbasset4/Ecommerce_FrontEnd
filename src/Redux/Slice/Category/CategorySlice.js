import { createSlice } from '@reduxjs/toolkit'
import { getAllCategory,getOneCategory,createCategory,deleteCategory,updateCategory } from './CategoryThunk'

const initialState = {
    category: [],
    updateCategory:[],
    deleteCategory:"idle",
    isLoading: true,
}

 const categorySlice = createSlice({
  name: 'category',
  initialState,
  extraReducers:{
    [getAllCategory.pending]:(state)=>{
      state.isLoading=true;
    },
    [getAllCategory.fulfilled]:(state,action)=>{
      state.category = action.payload
      state.isLoading=false;
    },
    [getAllCategory.rejected]:(state,action)=>{

      state.isLoading=false;
      state.category = action.payload
    },
    [getOneCategory.pending]:(state)=>{
      state.isLoading=true;
    },
    [getOneCategory.fulfilled]:(state,action)=>{
      state.category = action.payload
      state.isLoading=false;
    },
    [getOneCategory.rejected]:(state,action)=>{

      state.isLoading=false;
      state.category = action.payload
    },
    [createCategory.pending]:(state)=>{
      state.isLoading=true;
    },
    [createCategory.fulfilled]:(state,action)=>{
      state.category = action.payload
      state.isLoading=false;
    },
    [createCategory.rejected]:(state,action)=>{

      state.isLoading=false;
      state.category = action.payload
    },
    [deleteCategory.pending]:(state)=>{
      state.isLoading=true;
    },
    [deleteCategory.fulfilled]:(state)=>{
      state.deleteCategory = "succeeded"
      state.isLoading=false;
    },
    [deleteCategory.rejected]:(state)=>{
      state.isLoading=false;
      state.deleteCategory = "failed"
    },
    [updateCategory.pending]:(state)=>{
      state.isLoading=true;
    },
    [updateCategory.fulfilled]:(state,action)=>{
      state.updateCategory = action.payload
      state.isLoading=false;
    },
    [updateCategory.rejected]:(state,action)=>{
      state.isLoading=false;
      state.updateCategory = action.payload
    },
  }
})




export default categorySlice.reducer