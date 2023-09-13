import { createAsyncThunk } from "@reduxjs/toolkit";
import { useInsertData } from "../../../hooks/useInsertData";
import useDeleteData from "../../../hooks/useDeleteData";
import { useGetDataToken } from "../../../hooks/useGetData";

export const getUserWishList = createAsyncThunk(
    "wishlist/getAll",
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

  export const createFavoriteProduct = createAsyncThunk(
    "wishlist/create",
    async (prodId, thunkAPI) => {
      const { rejectWithValue } = thunkAPI;
      try {
        const res = await useInsertData(`/api/v1/wishlist`,prodId);
        return res;
      } catch (err) {
        return rejectWithValue(err.response);
      }
    }
  );
  
  export const deleteFavoriteProduct = createAsyncThunk(
    "wishlist/delete",
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