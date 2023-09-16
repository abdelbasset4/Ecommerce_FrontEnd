import { createSlice } from '@reduxjs/toolkit'
import { getAllCategory,getOneCategory,createCategory,deleteCategory,updateCategory } from './CategoryThunk'

const initialState = {
    category: [],
    updateCategory:[],
}

 const categorySlice = createSlice({
  name: 'category',
  initialState,
  extraReducers:{

    [getAllCategory.fulfilled]:(state,action)=>{
      state.category = action.payload

    },
    [getAllCategory.rejected]:(state,action)=>{

      state.category = action.payload
    },

    [getOneCategory.fulfilled]:(state,action)=>{
      state.category = action.payload
    },
    [getOneCategory.rejected]:(state,action)=>{
      state.category = action.payload
    },
    [createCategory.fulfilled]:(state,action)=>{
      state.category = action.payload
    },
    [createCategory.rejected]:(state,action)=>{
      state.category = action.payload
    },
    [deleteCategory.fulfilled]:(state,action)=>{
      state.category.data = state?.category?.data?.filter((value)=>value._id !== action.payload.id)
    },
    [deleteCategory.rejected]:(state,action)=>{
      state.category = action.payload
    },
    [updateCategory.fulfilled]:(state,action)=>{
      state.updateCategory = action.payload
    },
    [updateCategory.rejected]:(state,action)=>{
      state.updateCategory = action.payload
    },
  }
})




export default categorySlice.reducer