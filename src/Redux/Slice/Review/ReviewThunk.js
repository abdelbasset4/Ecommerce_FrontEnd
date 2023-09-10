import { useInsertData } from "../../../hooks/useInsertData";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const createReview = createAsyncThunk(
    "review/create",
    async (args, thunkAPI) => {
      const { rejectWithValue } = thunkAPI;
      try {
        const res = await useInsertData(`/api/v1/products/${args[0]}/reviews`, args[1]);
        return res;
      } catch (err) {
        return rejectWithValue(err.response);
      }
    }
  );