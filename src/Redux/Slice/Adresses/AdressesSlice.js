import { createSlice } from "@reduxjs/toolkit";
import {
  createAdress,
  deleteAdress,
  getAllAdresses,
  getOneAdress,
  updateSpecificAdress,
} from "./AdressesThunk";

const initialState = {
  adress: [],
  oneAdress:[],
  adressCreated: [],
  updateAdress: [],
};

const adressSlice = createSlice({
  name: "adress",
  initialState,
  extraReducers: {
    [getAllAdresses.fulfilled]: (state, action) => {
      state.adress = action.payload;
    },
    [getAllAdresses.rejected]: (state, action) => {
      state.adress = action.payload;
    },
    [getOneAdress.fulfilled]: (state, action) => {
      state.oneAdress = action.payload;
    },
    [getOneAdress.rejected]: (state, action) => {
      state.oneAdress = action.payload;
    },
    [createAdress.fulfilled]: (state, action) => {
      state.adressCreated = action.payload;
    },
    [createAdress.rejected]: (state, action) => {
      state.adressCreated = action.payload;
    },
    [deleteAdress.fulfilled]: (state, action) => {
      state.adress = action.payload;
    },
    [deleteAdress.rejected]: (state, action) => {
      state.adress = action.payload;
    },
    [updateSpecificAdress.fulfilled]: (state, action) => {
      state.updateAdress = action.payload;
    },
    [updateSpecificAdress.rejected]: (state, action) => {
      state.updateAdress = action.payload;
    },
  },
});

export default adressSlice.reducer;
