import {createAsyncThunk} from "@reduxjs/toolkit";
import useGetData from "../../../hooks/useGetData";
import {useInsertDataWithImage} from "../../../hooks/useInsertData";
import useDeleteData from "../../../hooks/useDeleteData";
import { useUpdateDataWithImage } from "../../../hooks/useUpdateData";

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

export  const updateProduct=createAsyncThunk('product/update' ,async (args ,thunkAPI)=>{
    const {rejectWithValue}=thunkAPI;
    try{
        const res = await useUpdateDataWithImage(`/api/v1/products/${args[0]}`,args[1]);
        return res;
    }catch (err){
        console.log(err.message);
        return rejectWithValue(err.message);
    }
})