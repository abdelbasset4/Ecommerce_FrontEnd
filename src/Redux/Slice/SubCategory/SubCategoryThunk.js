import {createAsyncThunk} from "@reduxjs/toolkit";
import {useInsertData} from "../../../hooks/useInsertData";



export  const createSubCategory=createAsyncThunk('subcategory/create' ,async (data ,thunkAPI)=>{
    const {rejectWithValue}=thunkAPI;
    try{
        const res = await useInsertData(`/api/v1/subcategories`,data);
        return res;
    }catch (err){
        return rejectWithValue(err.message);
    }
})