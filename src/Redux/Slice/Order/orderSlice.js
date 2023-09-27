import { createSlice } from "@reduxjs/toolkit";
import { createCashOrder } from "./orderThunk";

const initialState = {
  //   adress: [],
  //   oneAdress:[],
  orderCreated: [],
  //   updateAdress: [],
};

const OrderSlice = createSlice({
  name: "order",
  initialState,
  extraReducers: {
    [createCashOrder.fulfilled]: (state, action) => {
      state.orderCreated = action.payload;
    },
    [createCashOrder.rejected]: (state, action) => {
      state.orderCreated = action.payload;
    },
  },
});

export default OrderSlice.reducer;
