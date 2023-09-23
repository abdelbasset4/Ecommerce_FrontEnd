import { createSlice } from "@reduxjs/toolkit";
import { AddToCart, clearAllCart, getUserCart ,deleteItemCart} from "./CartThunk";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  extraReducers: {
    [getUserCart.fulfilled]: (state, action) => {
      state.cart = action.payload;
    },
    [getUserCart.rejected]: (state, action) => {
      state.cart = action.payload;
    },
    [AddToCart.fulfilled]: (state, action) => {
      state.cart = action.payload;
    },
    [AddToCart.rejected]: (state, action) => {
      state.cart = action.payload;
    },
    [clearAllCart.fulfilled]:(state,action)=>{
      state.cart = action.payload
    },
    [clearAllCart.rejected]:(state,action)=>{
      state.cart = action.payload
    },
    [deleteItemCart.fulfilled]:(state,action)=>{
      state.cart = action.payload
    },
    [deleteItemCart.rejected]:(state,action)=>{
      state.cart = action.payload
    },

  },
});

export default cartSlice.reducer;
