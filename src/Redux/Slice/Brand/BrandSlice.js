import { createSlice } from '@reduxjs/toolkit'
import { createBrand,getAllBrand ,getOneBrand,deleteBrand,updateBrand} from '../Brand/BrandThunk'

const initialState = {
    brand: [],
    updateBrand:[],
}

 const brandSlice = createSlice({
  name: 'brand',
  initialState,
  extraReducers:{

    [getAllBrand.fulfilled]:(state,action)=>{
      state.brand = action.payload
    },
    [getAllBrand.rejected]:(state,action)=>{
      state.brand=action.payload;
    },

    [getOneBrand.fulfilled]:(state,action)=>{
      state.brand = action.payload
    },
    [getOneBrand.rejected]:(state,action)=>{
      state.brand=action.payload;
    },
    [createBrand.fulfilled]:(state,action)=>{
      state.brand = action.payload
    },
    [createBrand.rejected]:(state,action)=>{
      state.brand=action.payload;
    },
    [deleteBrand.fulfilled]:(state,action)=>{
      state.brand.data = state?.brand?.data?.filter((value)=>value._id !== action.payload.id)
    },
    [deleteBrand.rejected]:(state,action)=>{
      state.brand = action.payload
    },
    [updateBrand.fulfilled]:(state,action)=>{
      state.updateBrand = action.payload
    },
    [updateBrand.rejected]:(state,action)=>{
      state.updateBrand = action.payload
    },
  }
})




export default brandSlice.reducer