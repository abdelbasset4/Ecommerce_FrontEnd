import {createAsyncThunk} from "@reduxjs/toolkit";
import {useInsertData} from "../../../hooks/useInsertData";


export const createUser=createAsyncThunk('register/create' ,async (data ,thunkAPI)=>{
    const {rejectWithValue}=thunkAPI;
    try{
        const res = await useInsertData(`/api/v1/auth/signup`,data);
        return res;
    }catch (err){
        console.log(err);
        return rejectWithValue(err.response.data);
    }
})