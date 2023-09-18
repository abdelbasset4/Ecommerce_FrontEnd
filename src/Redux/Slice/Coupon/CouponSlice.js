import { createSlice } from '@reduxjs/toolkit'
import { createCoupon, deleteCoupon, getAllCoupons, getOneCoupon, updateCoupon } from './CouponThunk';


const initialState = {
    coupon: [],
    
    updateCoupon:[],
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
      [getOneCoupon.fulfilled]:(state,action)=>{
        state.coupon = action.payload
      },
      [getOneCoupon.rejected]:(state,action)=>{
        state.coupon=action.payload;
      },
      [createCoupon.fulfilled]:(state,action)=>{
        state.coupon = action.payload
      },
      [createCoupon.rejected]:(state,action)=>{
        state.coupon=action.payload;
      },
      [deleteCoupon.fulfilled]:(state,action)=>{
        state.coupon.data = state?.coupon?.data?.filter((value)=>value._id !== action.payload.id)
      },
      [deleteCoupon.rejected]:(state,action)=>{
        state.coupon=action.payload;
      },
      [updateCoupon.fulfilled]:(state,action)=>{
        state.updateCoupon = action.payload
      },
      [updateCoupon.rejected]:(state,action)=>{
        state.updateCoupon = action.payload
      },
    
    }
  })
  


export default couponSlice.reducer