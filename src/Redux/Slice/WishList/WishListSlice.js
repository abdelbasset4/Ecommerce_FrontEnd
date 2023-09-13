import { createSlice } from '@reduxjs/toolkit'
import {createFavoriteProduct,deleteFavoriteProduct,getUserWishList} from '../WishList/WishListThunk'

const initialState = {
    wishlist: [],
    deleteWishList:"idle",
    isLoading: true,
}

 const wishListSlice = createSlice({
  name: 'wishlist',
  initialState,
  extraReducers:{
    [getUserWishList.pending]:(state)=>{
      state.isLoading=true;
    },
    [getUserWishList.fulfilled]:(state,action)=>{
      state.wishlist = action.payload
      state.isLoading=false;
    },
    [getUserWishList.rejected]:(state,action)=>{
      state.isLoading=true;
      state.wishlist=action.payload;
    },
   
    [createFavoriteProduct.pending]:(state)=>{
      state.isLoading=true;
    },
    [createFavoriteProduct.fulfilled]:(state,action)=>{
      state.wishlist = action.payload
      state.isLoading=false;
    },
    [createFavoriteProduct.rejected]:(state,action)=>{
      state.isLoading=true;
      state.wishlist=action.payload;
    },
    [deleteFavoriteProduct.pending]:(state)=>{
      state.isLoading=true;
    },
    [deleteFavoriteProduct.fulfilled]:(state)=>{
      state.deleteWishList = "succeeded"
      state.isLoading=false;
    },
    [deleteFavoriteProduct.rejected]:(state)=>{
      state.isLoading=true;
      state.deleteWishList = "failed"
    },
  }
})


export default wishListSlice.reducer