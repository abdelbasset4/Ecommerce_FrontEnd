import { createSlice } from '@reduxjs/toolkit'
import { getAllCategory } from './CategoryThunk'

const initialState = {
    category: [],
    isLoading: true,
    error:null
}

 const categorySlice = createSlice({
  name: 'category',
  initialState,
  extraReducers:{
    [getAllCategory.pending]:(state)=>{
      state.isLoading=true;
      state.erorr=null;
    },
    [getAllCategory.fulfilled]:(state,action)=>{
      state.category = action.payload
      state.isLoading=false;
      state.erorr=null;
    },
    [getAllCategory.rejected]:(state,action)=>{

      state.isLoading=false;
      state.erorr=action?.error?.message;
    },
  }
})




export default categorySlice.reducer