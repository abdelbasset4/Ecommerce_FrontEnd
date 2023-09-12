import useDeleteData from "../../../hooks/useDeleteData";
import { useGetDataToken } from "../../../hooks/useGetData";
import { useInsertData } from "../../../hooks/useInsertData";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { useUpdatetData } from "../../../hooks/useUpdateData";

export const createReview = createAsyncThunk(
  "review/create",
  async (args, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await useInsertData(
        `/api/v1/products/${args[0]}/reviews`,
        args[1]
      );
      return res;
    } catch (err) {
      return rejectWithValue(err.response);
    }
  }
);

export const getAllReviewOnProduct = createAsyncThunk(
  "review/getAll",
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

export const deleteReview = createAsyncThunk(
  "review/delete",
  async (url, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await useDeleteData(url);
      return res;
    } catch (err) {
      console.log(err.response);
      return rejectWithValue(err.response);
    }
  }
);

export const updateReview = createAsyncThunk(
  "review/update",
  async (args, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await useUpdatetData(
        `/api/v1/reviews/${args[0]}`,
        args[1]
      );
      return res;
    } catch (err) {
      return rejectWithValue(err.response);
    }
  }
);