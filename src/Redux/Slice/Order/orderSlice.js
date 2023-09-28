import { createSlice } from "@reduxjs/toolkit";
import { createCashOrder, getAllUserOrder } from "./orderThunk";

const initialState = {
  userOrders: [],
  //   oneAdress:[],
  orderCreated: [],
  //   updateAdress: [],
};

const OrderSlice = createSlice({
  name: "order",
  initialState,
  extraReducers: {
    [getAllUserOrder.fulfilled]: (state, action) => {
      state.userOrders = action.payload;
    },
    [getAllUserOrder.rejected]: (state, action) => {
      state.userOrders = action.payload;
    },
    [createCashOrder.fulfilled]: (state, action) => {
      state.orderCreated = action.payload;
    },
    [createCashOrder.rejected]: (state, action) => {
      state.orderCreated = action.payload;
    },
  },
});

export default OrderSlice.reducer;
