import { createAsyncThunk } from "@reduxjs/toolkit";
import { useInsertData } from "../../../hooks/useInsertData";
import { useGetDataToken } from "../../../hooks/useGetData";

export const getAllCoupons = createAsyncThunk(
  "coupon/getAll",
  async (url, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await useGetDataToken(url);
      return res;
    } catch (err) {
      return rejectWithValue(err.response);
    }
  }
);

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