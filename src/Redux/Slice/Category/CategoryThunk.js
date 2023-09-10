import { createAsyncThunk } from "@reduxjs/toolkit";
import { useGetData } from "../../../hooks/useGetData";
import { useInsertDataWithImage } from "../../../hooks/useInsertData";
import useDeleteData from "../../../hooks/useDeleteData";
import { useUpdateDataWithImage } from "../../../hooks/useUpdateData";
export const getAllCategory = createAsyncThunk(
  "category/getAll",
  async (url, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await useGetData(url);
      return res;
    } catch (err) {
      return rejectWithValue(err.response);
    }
  }
);
export const getOneCategory = createAsyncThunk(
  "category/getOne",
  async (url, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await useGetData(url);
      return res;
    } catch (err) {
      return rejectWithValue(err.response);
    }
  }
);

export const createCategory = createAsyncThunk(
  "category/create",
  async (formData, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await useInsertDataWithImage(`/api/v1/categories`, formData);
      return res;
    } catch (err) {
      console.log(err.response);
      return rejectWithValue(err.response);
    }
  }
);
export const deleteCategory = createAsyncThunk(
  "category/delete",
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

export const updateCategory = createAsyncThunk(
  "category/update",
  async (args, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await useUpdateDataWithImage(
        `/api/v1/categories/${args[0]}`,
        args[1]
      );
      return res;
    } catch (err) {
      return rejectWithValue(err.response);
    }
  }
);