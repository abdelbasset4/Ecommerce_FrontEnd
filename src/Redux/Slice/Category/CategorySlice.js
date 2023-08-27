import { createSlice } from '@reduxjs/toolkit'
import { getAllCategory,createCategory } from './CategoryThunk'

const initialState = {
    category: [],
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
    }
  }
})




export default categorySlice.reducer