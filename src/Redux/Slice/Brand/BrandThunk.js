import {createAsyncThunk} from "@reduxjs/toolkit";
import useGetData from "../../../hooks/useGetData";
import {useInsertDataWithImage} from "../../../hooks/useInsertData";

export  const getAllBrand=createAsyncThunk('brand/getAll' ,async (url ,thunkAPI)=>{
    const {rejectWithValue}=thunkAPI;
    try{
        const res = await useGetData(url);
        return res;
    }catch (err){
        return rejectWithValue(err.message);
    }
})

export  const getOneBrand=createAsyncThunk('brand/getOne' ,async (url ,thunkAPI)=>{
    const {rejectWithValue}=thunkAPI;
    try{
        const res = await useGetData(url);
        return res;
    }catch (err){
        return rejectWithValue(err.message);
    }
})

export const createBrand=createAsyncThunk('brand/create' ,async (formData ,thunkAPI)=>{
    const {rejectWithValue}=thunkAPI;
    try{
        const res = await useInsertDataWithImage(`/api/v1/brands`,formData);
        return res;
    }catch (err){
        return rejectWithValue(err.response.data);
    }
})