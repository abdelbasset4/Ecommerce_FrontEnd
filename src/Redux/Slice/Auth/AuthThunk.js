import { createAsyncThunk } from "@reduxjs/toolkit";
import { useInsertData } from "../../../hooks/useInsertData";
import { useGetDataToken } from "../../../hooks/useGetData";
import { useUpdatetData } from "../../../hooks/useUpdateData";

export const createUser = createAsyncThunk(
  "register/create",
  async (data, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await useInsertData(`/api/v1/auth/signup`, data);
      return res;
    } catch (err) {
      console.log(err.response);
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
export const LoginWithGoogle = createAsyncThunk(
  "login/createGoogle",
  async (data, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      // const res = await useInsertData(`/api/v1/auth/login`, data);
      localStorage.setItem("token",data)
      // return res;
    } catch (err) {
      return rejectWithValue(err.response);
    }
  }
);

export const ForgotPassword = createAsyncThunk(
  "login/forgotpassword",
  async (data, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await useInsertData(`/api/v1/auth/forgotPassword`, data);
      return res;
    } catch (err) {
      return rejectWithValue(err.response);
    }
  }
);

export const ResetCode = createAsyncThunk(
  "login/verifyresetcode",
  async (data, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await useInsertData(`/api/v1/auth/verifyResetCode`, data);
      return res;
    } catch (err) {
      return rejectWithValue(err.response);
    }
  }
);
export const ResetPassword = createAsyncThunk(
  "login/resetpassword",
  async (data, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await useUpdatetData(`/api/v1/auth/resetPassword`, data);
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
