import { createSlice } from '@reduxjs/toolkit'
import { createProduct,getAllProducts } from './ProductThunk'

const initialState = {
    products: [],
    isLoading: true,
    error:null
}

 const productSlice = createSlice({
  name: 'products',
  initialState,
  extraReducers:{
    [getAllProducts.pending]:(state)=>{
      state.isLoading=true;
      state.erorr=null;
    },
    [getAllProducts.fulfilled]:(state,action)=>{
      state.products = action.payload
      state.isLoading=false;
      state.erorr=null;
    },
    [getAllProducts.rejected]:(state,action)=>{
      state.isLoading=false;
      state.erorr=action?.error?.message;
    },
    [createProduct.pending]:(state)=>{
      state.isLoading=true;
      state.erorr=null;
    },
    [createProduct.fulfilled]:(state,action)=>{
      state.products = action.payload
      state.isLoading=false;
      state.erorr=null;
    },
    [createProduct.rejected]:(state,action)=>{
      state.isLoading=false;
      state.erorr=action?.error?.message;
    }
  }
})




export default productSlice.reducer