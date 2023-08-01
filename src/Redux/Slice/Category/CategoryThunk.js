import {createAsyncThunk} from "@reduxjs/toolkit";
import useGetData from "../../../hooks/useGetData";
import {useInsertDataWithImage} from "../../../hooks/useInsertData";

export  const getAllCategory=createAsyncThunk('category/getAll' ,async (url ,thunkAPI)=>{
    const {rejectWithValue}=thunkAPI;
    try{
        const res = await useGetData(url);
        return res;
    }catch (err){
        return rejectWithValue(err.message);
    }
})

export  const createCategory=createAsyncThunk('category/create' ,async (formData ,thunkAPI)=>{
    const {rejectWithValue}=thunkAPI;
    try{
        const res = await useInsertDataWithImage(`/api/v1/categories`,formData);
        return res;
    }catch (err){
        return rejectWithValue(err.message);
    }
})