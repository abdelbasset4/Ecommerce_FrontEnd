import {createAsyncThunk} from "@reduxjs/toolkit";
import useGetData from "../../../hooks/useGetData";

export  const getAllCategory=createAsyncThunk('category/getAll' ,async (url ,thunkAPI)=>{
    const {rejectWithValue}=thunkAPI;
    try{
        const res = await useGetData(url);
        return res.data;
    }catch (err){
        return rejectWithValue(err.message);
    }
})