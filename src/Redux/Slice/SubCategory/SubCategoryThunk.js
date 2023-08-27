import { createAsyncThunk } from "@reduxjs/toolkit";
import { useGetData } from "../../../hooks/useGetData";

import { useInsertData } from "../../../hooks/useInsertData";

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
