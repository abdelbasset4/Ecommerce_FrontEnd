import {createAsyncThunk} from "@reduxjs/toolkit";
import useGetData from "../../../hooks/useGetData";
import {useInsertDataWithImage} from "../../../hooks/useInsertData";
import useDeleteData from "../../../hooks/useDeleteData";

export  const getAllProducts=createAsyncThunk('product/getAll' ,async (url ,thunkAPI)=>{
    const {rejectWithValue}=thunkAPI;
    try{
        const res = await useGetData(url);
        return res;
    }catch (err){
        return rejectWithValue(err.message);
    }
})

export  const getOneProduct=createAsyncThunk('product/getOne' ,async (url ,thunkAPI)=>{
    const {rejectWithValue}=thunkAPI;
    try{
        const res = await useGetData(url);
        return res;
    }catch (err){
        return rejectWithValue(err.message);
    }
})
export  const getProductsLookLike=createAsyncThunk('product/getLookLike' ,async (url ,thunkAPI)=>{
    const {rejectWithValue}=thunkAPI;
    try{
        const res = await useGetData(url);
        return res;
    }catch (err){
        return rejectWithValue(err.message);
    }
})

export  const createProduct=createAsyncThunk('product/create' ,async (formData ,thunkAPI)=>{
    const {rejectWithValue}=thunkAPI;
    try{
        const res = await useInsertDataWithImage(`/api/v1/products`,formData);
        return res;
    }catch (err){
        console.log("hi error" + err);
        return rejectWithValue(err.message);
    }
})

export  const deleteProduct=createAsyncThunk('product/delete' ,async (url ,thunkAPI)=>{
    const {rejectWithValue}=thunkAPI;
    try{
        const res = await useDeleteData(url);
        return res;
    }catch (err){
        return rejectWithValue(err.message);
    }
})