import { createAsyncThunk } from "@reduxjs/toolkit";
import { useInsertData } from "../../../hooks/useInsertData";
import { useGetDataToken } from "../../../hooks/useGetData";
import useDeleteData from "../../../hooks/useDeleteData";
import { useUpdatetData } from "../../../hooks/useUpdateData";

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

export const getOneCoupon = createAsyncThunk(
  "brand/getOne",
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

export const deleteCoupon = createAsyncThunk(
  "coupon/delete",
  async (url, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await useDeleteData(url);
      return res;
    } catch (err) {
      return rejectWithValue(err.response);
    }
  }
);

export const updateCoupon = createAsyncThunk(
  "coupon/update",
  async (args, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await useUpdatetData(
        `/api/v1/coupons/${args[0]}`,
        args[1]
      );
      return res;
    } catch (err) {
      return rejectWithValue(err.response);
    }
  }
);
