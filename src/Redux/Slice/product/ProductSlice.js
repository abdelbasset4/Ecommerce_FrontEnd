import { createSlice } from '@reduxjs/toolkit'
import { createProduct,getAllProducts,getOneProduct ,getProductsLookLike ,deleteProduct,updateProduct} from './ProductThunk'

const initialState = {
    products: [],
    product:[],
    updateProduct:[],
    deleteProduct:"idle",
    isLoading: true,
}

 const productSlice = createSlice({
  name: 'products',
  initialState,
  extraReducers:{
    [getAllProducts.pending]:(state)=>{
      state.isLoading=true;
    },
    [getAllProducts.fulfilled]:(state,action)=>{
      state.products = action.payload
      state.isLoading=false;
    },
    [getAllProducts.rejected]:(state,action)=>{
      state.isLoading=false;
      state.products = action.payload
    },
    [getProductsLookLike.pending]:(state)=>{
      state.isLoading=true;
    },
    [getProductsLookLike.fulfilled]:(state,action)=>{
      state.products = action.payload
      state.isLoading=false;
    },
    [getProductsLookLike.rejected]:(state,action)=>{
      state.isLoading=false;
      state.products = action.payload
    },
    [createProduct.pending]:(state)=>{
      state.isLoading=true;
    },
    [createProduct.fulfilled]:(state,action)=>{
      state.products = action.payload
      state.isLoading=false;
    },
    [createProduct.rejected]:(state,action)=>{
      state.isLoading=false;
      state.products = action.payload
    },
    [getOneProduct.pending]:(state)=>{
      state.isLoading=true;
    },
    [getOneProduct.fulfilled]:(state,action)=>{
      state.product = action.payload
      state.isLoading=false;
    },
    [getOneProduct.rejected]:(state,action)=>{
      state.isLoading=false;
      state.product = action.payload
    },
    [deleteProduct.pending]:(state)=>{
      state.isLoading=true;
    },
    [deleteProduct.fulfilled]:(state)=>{
      state.deleteProduct = "succeeded"
      state.isLoading=false;
    },
    [deleteProduct.rejected]:(state)=>{
      state.isLoading=false;
      state.deleteProduct = "failed"
    },
    [updateProduct.pending]:(state)=>{
      state.isLoading=true;
    },
    [updateProduct.fulfilled]:(state,action)=>{
      state.updateProduct = action.payload
      state.isLoading=false;
    },
    [updateProduct.rejected]:(state,action)=>{
      state.isLoading=false;
      state.updateProduct = action.payload
    },
  }
})




export default productSlice.reducer