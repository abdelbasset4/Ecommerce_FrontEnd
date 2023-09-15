import { createAsyncThunk } from "@reduxjs/toolkit";
import { useInsertData } from "../../../hooks/useInsertData";



export const createCoupon = createAsyncThunk(
    "coupon/create",
    async (data, thunkAPI) => {
      const { rejectWithValue } = thunkAPI;
      try {
        const res = await useInsertData(`/api/v1/coupons/`, data);
        return res;
      } catch (err) {
        return rejectWithValue(err.response);
      }
    }
  );