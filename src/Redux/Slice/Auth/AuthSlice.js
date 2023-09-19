import { createSlice } from "@reduxjs/toolkit";
import {
  createUser,
  createGoogleUser,
  Login,
  GetLoggedUser,
  ForgotPassword,
  ResetCode,
  ResetPassword,
  LoginWithGoogle,
  updateUserInfo
} from "../Auth/AuthThunk";

const initialState = {
  user: [],
};

const AuthSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: {
    [createUser.fulfilled]: (state, action) => {
      state.user = action.payload;
    },
    [createUser.rejected]: (state, action) => {
      state.user = action.payload;
    },
    [createGoogleUser.fulfilled]: (state, action) => {
      state.user = action.payload;
    },
    [createGoogleUser.rejected]: (state, action) => {
      state.user = action.payload;
    },
    [Login.fulfilled]: (state, action) => {
      state.user = action.payload;
    },
    [Login.rejected]: (state, action) => {
      state.user = action.payload;
    },
    [LoginWithGoogle.fulfilled]: (state, action) => {
      state.user = action.payload;
    },
    [LoginWithGoogle.rejected]: (state, action) => {
      state.user = action.payload;
    },
    [ForgotPassword.fulfilled]: (state, action) => {
      state.user = action.payload;
    },
    [ForgotPassword.rejected]: (state, action) => {
      state.user = action.payload;
    },
    [ResetCode.fulfilled]: (state, action) => {
      state.user = action.payload;
    },
    [ResetCode.rejected]: (state, action) => {
      state.user = action.payload;
    },
    [ResetPassword.fulfilled]: (state, action) => {
      state.user = action.payload;
    },
    [ResetPassword.rejected]: (state, action) => {
      state.user = action.payload;
    },

    [GetLoggedUser.fulfilled]: (state, action) => {
      state.user = action.payload;

    },
    [GetLoggedUser.rejected]: (state, action) => {
      state.user = action.payload;
    },
    [updateUserInfo.fulfilled]: (state, action) => {
      state.user = action.payload;

    },
    [updateUserInfo.rejected]: (state, action) => {
      state.user = action.payload;
    },
  },
});

export default AuthSlice.reducer;
