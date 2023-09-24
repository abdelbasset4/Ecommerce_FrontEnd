import { createAsyncThunk } from "@reduxjs/toolkit";
import { useInsertData } from "../../../hooks/useInsertData";
import { useUpdatetData } from "../../../hooks/useUpdateData";

import { useGetDataToken } from "../../../hooks/useGetData";
import useDeleteData from "../../../hooks/useDeleteData";

export const getUserCart = createAsyncThunk(
  "cart/getAll",
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

export const AddToCart = createAsyncThunk(
  "cart/create",
  async (data, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await useInsertData(`/api/v1/cart`, data);
      return res;
    } catch (err) {
      return rejectWithValue(err.response);
    }
  }
);

export const clearAllCart = createAsyncThunk(
  "clear/delete",
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

export const deleteItemCart = createAsyncThunk(
  "delete/delete",
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

export const updateCartQuantity = createAsyncThunk(
  "cart/update",
  async (args, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await useUpdatetData(
        `/api/v1/cart/${args[0]}`,
        args[1]
      );
      return res;
    } catch (err) {
      return rejectWithValue(err.response);
    }
  }
);
export const applyCoupon = createAsyncThunk(
  "coupon/update",
  async (coupon, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await useUpdatetData(
        `/api/v1/cart/applyCoupon`,
        coupon
      );
      return res;
    } catch (err) {
      return rejectWithValue(err.response);
    }
  }
);