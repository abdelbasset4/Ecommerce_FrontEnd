import { createSlice } from '@reduxjs/toolkit'
import {createFavoriteProduct,deleteFavoriteProduct,getUserWishList} from '../WishList/WishListThunk'

const initialState = {
    wishlist: [],
}

 const wishListSlice = createSlice({
  name: 'wishlist',
  initialState,
  extraReducers:{

    [getUserWishList.fulfilled]:(state,action)=>{
      state.wishlist = action.payload
    },
    [getUserWishList.rejected]:(state,action)=>{
      state.wishlist=action.payload;
    },

    [createFavoriteProduct.fulfilled]:(state,action)=>{
      state.wishlist = action.payload
    },
    [createFavoriteProduct.rejected]:(state,action)=>{
      state.wishlist=action.payload;
    },
    [deleteFavoriteProduct.fulfilled]:(state,action)=>{
      state.wishlist.status=action.payload.status;
    },
    [deleteFavoriteProduct.rejected]:(state,action)=>{
      state.wishlist=action.payload;
    },
  }
})


export default wishListSlice.reducer