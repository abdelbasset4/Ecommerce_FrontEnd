import { createSlice } from "@reduxjs/toolkit";
import { createUser, Login } from "../Auth/AuthThunk";

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
      state.erorr = null;
    },
    [createUser.fulfilled]: (state, action) => {
      state.user = action.payload;
      state.isLoading = false;
    },
    [createUser.rejected]: (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
    },
    [Login.pending]: (state) => {
      state.isLoading = true;
      state.erorr = null;
    },
    [Login.fulfilled]: (state, action) => {
      state.user = action.payload;
      state.isLoading = false;
    },
    [Login.rejected]: (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
    },
  },
});

export default AuthSlice.reducer;
