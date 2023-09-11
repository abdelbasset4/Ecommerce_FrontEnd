import { createSlice } from "@reduxjs/toolkit";
import {
  createUser,
  createGoogleUser,
  Login,
  GetLoggedUser,
  ForgotPassword,
  ResetCode,
  ResetPassword,
  LoginWithGoogle
} from "../Auth/AuthThunk";

const initialState = {
  user: [],
  isLoading: true,
};

const AuthSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: {
    [createUser.pending]: (state) => {
      state.isLoading = true;
    },
    [createUser.fulfilled]: (state, action) => {
      state.user = action.payload;
      state.isLoading = false;
    },
    [createUser.rejected]: (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
    },
    [createGoogleUser.pending]: (state) => {
      state.isLoading = true;
    },
    [createGoogleUser.fulfilled]: (state, action) => {
      state.user = action.payload;
      state.isLoading = false;
    },
    [createGoogleUser.rejected]: (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
    },
    [Login.pending]: (state) => {
      state.isLoading = true;
    },
    [Login.fulfilled]: (state, action) => {
      state.user = action.payload;
      state.isLoading = false;
    },
    [Login.rejected]: (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
    },
    [LoginWithGoogle.pending]: (state) => {
      state.isLoading = true;
    },
    [LoginWithGoogle.fulfilled]: (state, action) => {
      state.user = action.payload;
      state.isLoading = false;
    },
    [LoginWithGoogle.rejected]: (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
    },
    [ForgotPassword.pending]: (state) => {
      state.isLoading = true;
    },
    [ForgotPassword.fulfilled]: (state, action) => {
      state.user = action.payload;
      state.isLoading = false;
    },
    [ForgotPassword.rejected]: (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
    },
    [ResetCode.pending]: (state) => {
      state.isLoading = true;
    },
    [ResetCode.fulfilled]: (state, action) => {
      state.user = action.payload;
      state.isLoading = false;
    },
    [ResetCode.rejected]: (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
    },
    [ResetPassword.pending]: (state) => {
      state.isLoading = true;
    },
    [ResetPassword.fulfilled]: (state, action) => {
      state.user = action.payload;
      state.isLoading = false;
    },
    [ResetPassword.rejected]: (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
    },
    [GetLoggedUser.pending]: (state) => {
      state.isLoading = true;
    },
    [GetLoggedUser.fulfilled]: (state, action) => {
      state.user = action.payload;
      state.isLoading = false;
    },
    [GetLoggedUser.rejected]: (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
    },
  },
});

export default AuthSlice.reducer;
