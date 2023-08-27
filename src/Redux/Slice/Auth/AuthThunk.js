import { createAsyncThunk } from "@reduxjs/toolkit";
import { useInsertData } from "../../../hooks/useInsertData";
import { useGetDataToken } from "../../../hooks/useGetData";

export const createUser = createAsyncThunk(
  "register/create",
  async (data, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await useInsertData(`/api/v1/auth/signup`, data);
      return res;
    } catch (err) {
      return rejectWithValue(err.response);
    }
  }
);

export const Login = createAsyncThunk(
  "login/create",
  async (data, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await useInsertData(`/api/v1/auth/login`, data);
      return res;
    } catch (err) {
      return rejectWithValue(err.response);
    }
  }
);

export const GetLoggedUser = createAsyncThunk(
  "login/loggedUser",
  async (data, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await useGetDataToken(`/api/v1/users/getMe`);
      return res;
    } catch (err) {
      return rejectWithValue(err.response);
    }
  }
);
