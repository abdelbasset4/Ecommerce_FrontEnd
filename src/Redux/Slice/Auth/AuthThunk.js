import { createAsyncThunk } from "@reduxjs/toolkit";
import { useInsertData } from "../../../hooks/useInsertData";
import { useGetDataToken } from "../../../hooks/useGetData";
import { useUpdateDataWithImage, useUpdatetData } from "../../../hooks/useUpdateData";

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
export const createGoogleUser = createAsyncThunk(
  "register/createGoogle",
  async (accessToken, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await useInsertData(`/api/v1/auth/signup-google`, {
        googleAccessToken: accessToken
      });
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
      console.log(res);
      return res;
    } catch (err) {
      console.log(err.response);
      return rejectWithValue(err.response);
    }
  }
);
export const LoginWithGoogle = createAsyncThunk(
  "login/createGoogle",
  async (accessToken, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await useInsertData(`/api/v1/auth/login-google`,  {
        googleAccessToken: accessToken
      });
      return res;
    } catch (err) {
      console.log(err.response);
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
export const updateUserInfo = createAsyncThunk(
  "loggedUser/update",
  async (formdata, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await useUpdateDataWithImage(
        `/api/v1/users/changeMyData`,
        formdata
      );
      return res;
    } catch (err) {
      return rejectWithValue(err.response);
    }
  }
);

export const updateUserPassword = createAsyncThunk(
  "loggedUserPassword/update",
  async (data, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await useUpdatetData(
        `/api/v1/users/changeMyPassword`,
        data
      );
      console.log(res);
      return res;
    } catch (err) {
      return rejectWithValue(err.response);
    }
  }
);