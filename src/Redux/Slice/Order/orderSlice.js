import { createSlice } from "@reduxjs/toolkit";
import { createCashOrder, getAllUserOrder, getOneOrder,changeOrderToDeliver,changeOrderToPay, createCardOrder } from "./orderThunk";

const initialState = {
  userOrders: [],
  oneOrder: [],
  orderCreated: [],
  orderCardCreated:[],
  orderPayed: [],
  orderDeliver: [],
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
    [getOneOrder.fulfilled]: (state, action) => {
      state.oneOrder = action.payload;
    },
    [getOneOrder.rejected]: (state, action) => {
      state.oneOrder = action.payload;
    },
    [createCashOrder.fulfilled]: (state, action) => {
      state.orderCreated = action.payload;
    },
    [createCashOrder.rejected]: (state, action) => {
      state.orderCreated = action.payload;
    },
    [createCardOrder.fulfilled]: (state, action) => {
      state.orderCardCreated = action.payload;
    },
    [createCardOrder.rejected]: (state, action) => {
      state.orderCardCreated = action.payload;
    },
    [changeOrderToDeliver.fulfilled]: (state, action) => {
      state.orderDeliver = action.payload;
    },
    [changeOrderToDeliver.rejected]: (state, action) => {
      state.orderDeliver = action.payload;
    },
    [changeOrderToPay.fulfilled]: (state, action) => {
      state.orderPayed = action.payload;
    },
    [changeOrderToPay.rejected]: (state, action) => {
      state.orderPayed = action.payload;
    },
  },
});

export default OrderSlice.reducer;
