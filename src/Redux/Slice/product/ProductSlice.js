import { createSlice } from '@reduxjs/toolkit'
import { createProduct,getAllProducts,getOneProduct ,getProductsLookLike ,deleteProduct} from './ProductThunk'

const initialState = {
    products: [],
    product:[],
    deleteProduct:"idle",
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
    [getProductsLookLike.pending]:(state)=>{
      state.isLoading=true;
      state.erorr=null;
    },
    [getProductsLookLike.fulfilled]:(state,action)=>{
      state.products = action.payload
      state.isLoading=false;
      state.erorr=null;
    },
    [getProductsLookLike.rejected]:(state,action)=>{
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
    },
    [getOneProduct.pending]:(state)=>{
      state.isLoading=true;
      state.erorr=null;
    },
    [getOneProduct.fulfilled]:(state,action)=>{
      state.product = action.payload
      state.isLoading=false;
      state.erorr=null;
    },
    [getOneProduct.rejected]:(state,action)=>{
      state.isLoading=false;
      state.erorr=action?.error?.message;
    },
    [deleteProduct.pending]:(state)=>{
      state.isLoading=true;
      state.erorr=null;
    },
    [deleteProduct.fulfilled]:(state)=>{
      state.deleteProduct = "succeeded"
      state.isLoading=false;
      state.erorr=null;
    },
    [deleteProduct.rejected]:(state,action)=>{
      state.isLoading=false;
      state.erorr=action?.error?.message;
    },
  }
})




export default productSlice.reducer