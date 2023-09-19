import { createAsyncThunk } from "@reduxjs/toolkit";
import { useInsertData } from "../../../hooks/useInsertData";
import { useGetDataToken } from "../../../hooks/useGetData";
import useDeleteData from "../../../hooks/useDeleteData";
import { useUpdatetData } from "../../../hooks/useUpdateData";

export const getAllAdresses = createAsyncThunk(
  "adress/getAll",
  async (url, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await useGetDataToken(url);
      return res;
    } catch (err) {
      return rejectWithValue(err.response);
    }
  }
);

export const getOneAdress = createAsyncThunk(
  "adress/getOne",
  async (url, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await useGetDataToken(url);
      return res;
    } catch (err) {
      return rejectWithValue(err.response);
    }
  }
);

export const createAdress = createAsyncThunk(
  "adress/create",
  async (data, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await useInsertData(`/api/v1/adresses/`, data);
      return res;
    } catch (err) {
      return rejectWithValue(err.response);
    }
  }
);

export const deleteAdress = createAsyncThunk(
  "adress/delete",
  async (url, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await useDeleteData(url);
      return res;
    } catch (err) {
      return rejectWithValue(err.response);
    }
  }
);



export const updateSpecificAdress = createAsyncThunk(
  "adress/update",
  async (args, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await useUpdatetData(
        `/api/v1/adresses/${args[0]}`,
        args[1]
      );
      return res;
    } catch (err) {
      return rejectWithValue(err.response);
    }
  }
);


