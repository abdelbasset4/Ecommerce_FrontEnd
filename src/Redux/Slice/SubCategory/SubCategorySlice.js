import { createSlice } from '@reduxjs/toolkit'
import { createSubCategory } from './SubCategoryThunk'

const initialState = {
    subCategory: [],
    isLoading: true,
    error:null
}

 const subCategorySlice = createSlice({
  name: 'subCategory',
  initialState,
  extraReducers:{
    [createSubCategory.pending]:(state)=>{
      state.isLoading=true;
      state.erorr=null;
    },
    [createSubCategory.fulfilled]:(state,action)=>{
      state.subCategory = action.payload
      state.isLoading=false;
      state.erorr=null;
    },
    [createSubCategory.rejected]:(state,action)=>{

      state.isLoading=false;
      state.erorr=action?.error?.message;
    }
  }
})




export default subCategorySlice.reducer