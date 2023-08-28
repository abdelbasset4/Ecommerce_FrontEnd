import { createAsyncThunk } from "@reduxjs/toolkit";
import { useGetData } from "../../../hooks/useGetData";
import { useInsertData } from "../../../hooks/useInsertData";
import useDeleteData from "../../../hooks/useDeleteData";
import { useUpdateDataWithImage } from "../../../hooks/useUpdateData";

export const getAllSubCategoryOnCatID = createAsyncThunk(
  "subcategory/getAll",
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

export const createSubCategory = createAsyncThunk(
  "subcategory/create",
  async (data, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await useInsertData(`/api/v1/subcategories`, data);
      return res;
    } catch (err) {
      return rejectWithValue(err.response);
    }
  }
);

export const deleteSubCategory = createAsyncThunk(
  "subcategory/delete",
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

export const updateSubCategory = createAsyncThunk(
  "subcategory/update",
  async (args, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await useUpdateDataWithImage(
        `/api/v1/subcategories/${args[0]}`,
        args[1]
      );
      return res;
    } catch (err) {
      return rejectWithValue(err.response);
    }
  }
);
