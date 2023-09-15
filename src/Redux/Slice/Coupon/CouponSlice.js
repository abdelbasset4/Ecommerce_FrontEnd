import { createSlice } from '@reduxjs/toolkit'
import { createCoupon, getAllCoupons } from './CouponThunk';


const initialState = {
    coupon: [],
    updateCoupon:[],
    deleteCoupon:"idle",

}


const couponSlice = createSlice({
    name: 'coupon',
    initialState,
    extraReducers:{
      [getAllCoupons.fulfilled]:(state,action)=>{
        state.coupon = action.payload
      },
      [getAllCoupons.rejected]:(state,action)=>{
        state.coupon=action.payload;
      },
      [createCoupon.fulfilled]:(state,action)=>{
        state.coupon = action.payload
      },
      [createCoupon.rejected]:(state,action)=>{
        state.coupon=action.payload;
      },
    
    }
  })
  


export default couponSlice.reducer