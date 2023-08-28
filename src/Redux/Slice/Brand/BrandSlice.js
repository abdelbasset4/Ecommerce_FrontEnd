import { createSlice } from '@reduxjs/toolkit'
import { createBrand,getAllBrand ,getOneBrand,deleteBrand,updateBrand} from '../Brand/BrandThunk'

const initialState = {
    brand: [],
    oneBrand:[],
    updateBrand:[],
    deleteBrand:"idle",
    isLoading: true,
}

 const brandSlice = createSlice({
  name: 'brand',
  initialState,
  extraReducers:{
    [getAllBrand.pending]:(state)=>{
      state.isLoading=true;
    },
    [getAllBrand.fulfilled]:(state,action)=>{
      state.brand = action.payload
      state.isLoading=false;
    },
    [getAllBrand.rejected]:(state,action)=>{
      state.isLoading=false;
      state.brand=action.payload;
    },
    [getOneBrand.pending]:(state)=>{
      state.isLoading=true;
    },
    [getOneBrand.fulfilled]:(state,action)=>{
      state.oneBrand = action.payload
      state.isLoading=false;
    },
    [getOneBrand.rejected]:(state,action)=>{
      state.isLoading=false;
      state.brand=action.payload;
    },
    [createBrand.pending]:(state)=>{
      state.isLoading=true;
    },
    [createBrand.fulfilled]:(state,action)=>{
      state.brand = action.payload
      state.isLoading=false;
    },
    [createBrand.rejected]:(state,action)=>{
      state.isLoading=false;
      state.brand=action.payload;
    },
    [deleteBrand.pending]:(state)=>{
      state.isLoading=true;
    },
    [deleteBrand.fulfilled]:(state)=>{
      state.deleteBrand = "succeeded"
      state.isLoading=false;
    },
    [deleteBrand.rejected]:(state)=>{
      state.isLoading=false;
      state.deleteBrand = "failed"
    },
    [updateBrand.pending]:(state)=>{
      state.isLoading=true;
    },
    [updateBrand.fulfilled]:(state,action)=>{
      state.updateBrand = action.payload
      state.isLoading=false;
    },
    [updateBrand.rejected]:(state,action)=>{
      state.isLoading=false;
      state.updateBrand = action.payload
    },
  }
})




export default brandSlice.reducer