import { createAsyncThunk } from "@reduxjs/toolkit";
import { useGetData,useGetDataInter } from "../../../hooks/useGetData";
import { useInsertDataWithImage } from "../../../hooks/useInsertData";
import useDeleteData from "../../../hooks/useDeleteData";
import { useUpdateDataWithImage } from "../../../hooks/useUpdateData";

// export const getAllBrand = createAsyncThunk(
//   "brand/getAll",
//   async (url, thunkAPI) => {
//     const { rejectWithValue } = thunkAPI;
//     try {
//       const res = await useGetData(url);
//       return res;
//     } catch (err) {
//       return rejectWithValue(err.response);
//     }
//   }
// );
export const getAllBrand = createAsyncThunk(
  "brand/getAll",
  async (url, thunkAPI) => {
    // const controller = new AbortController();
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await useGetDataInter(url);
      console.log(res);
      return res;
    } catch (err) {
      console.log(err);
      return rejectWithValue(err.response);
    }
  }
);

export const getOneBrand = createAsyncThunk(
  "brand/getOne",
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

export const createBrand = createAsyncThunk(
  "brand/create",
  async (formData, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await useInsertDataWithImage(`/api/v1/brands`, formData);
      return res;
    } catch (err) {
      return rejectWithValue(err.response);
    }
  }
);

export const deleteBrand = createAsyncThunk(
  "brand/delete",
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

export const updateBrand = createAsyncThunk(
  "brand/update",
  async (args, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await useUpdateDataWithImage(
        `/api/v1/brands/${args[0]}`,
        args[1]
      );
      return res;
    } catch (err) {
      return rejectWithValue(err.response);
    }
  }
);