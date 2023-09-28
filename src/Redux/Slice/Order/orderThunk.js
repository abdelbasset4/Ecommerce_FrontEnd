import { createAsyncThunk } from "@reduxjs/toolkit";
import { useInsertData } from "../../../hooks/useInsertData";
import { useGetDataToken } from "../../../hooks/useGetData";
import useDeleteData from "../../../hooks/useDeleteData";
import { useUpdatetData } from "../../../hooks/useUpdateData";

export const createCashOrder = createAsyncThunk(
  "order/create",
  async (args, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await useInsertData(`/api/v1/orders/${args[0]}`, args[1]);
      return res;
    } catch (err) {
      return rejectWithValue(err.response);
    }
  }
);

export const getAllUserOrder = createAsyncThunk(
  "userOrder/getAll",
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
