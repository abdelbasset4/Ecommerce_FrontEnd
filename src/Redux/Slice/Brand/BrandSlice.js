import { createSlice } from '@reduxjs/toolkit'
import { createBrand,getAllBrand ,getOneBrand} from '../Brand/BrandThunk'

const initialState = {
    brand: [],
    oneBrand:[],
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
    }
  }
})




export default brandSlice.reducer