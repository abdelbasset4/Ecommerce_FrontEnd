import { createSlice } from '@reduxjs/toolkit'
import { createBrand,getAllBrand ,getOneBrand} from '../Brand/BrandThunk'

const initialState = {
    brand: [],
    oneBrand:[],
    isLoading: true,
    error:null
}

 const brandSlice = createSlice({
  name: 'brand',
  initialState,
  extraReducers:{
    [getAllBrand.pending]:(state)=>{
      state.isLoading=true;
      state.erorr=null;
    },
    [getAllBrand.fulfilled]:(state,action)=>{
      state.brand = action.payload
      state.isLoading=false;
      state.erorr=null;
    },
    [getAllBrand.rejected]:(state,action)=>{

      state.isLoading=false;
      state.erorr=action?.error?.message;
    },
    [getOneBrand.pending]:(state)=>{
      state.isLoading=true;
      state.erorr=null;
    },
    [getOneBrand.fulfilled]:(state,action)=>{
      state.oneBrand = action.payload
      state.isLoading=false;
      state.erorr=null;
    },
    [getOneBrand.rejected]:(state,action)=>{
      state.isLoading=false;
      state.erorr=action?.error?.message;
    },
    [createBrand.pending]:(state)=>{
      state.isLoading=true;
      state.erorr=null;
    },
    [createBrand.fulfilled]:(state,action)=>{
      state.brand = action.payload
      state.isLoading=false;
      state.erorr=null;
    },
    [createBrand.rejected]:(state,action)=>{
      state.isLoading=false;
      console.log(action?.error?.message);
      state.erorr=action?.error?.message;
    }
  }
})




export default brandSlice.reducer