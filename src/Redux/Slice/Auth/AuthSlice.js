import { createSlice } from '@reduxjs/toolkit'
import { createUser} from '../Auth/AuthThunk'

const initialState = {
    user: [],
    isLoading: true,
    error:null
}

 const AuthSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers:{
    [createUser.pending]:(state)=>{
      state.isLoading=true;
      state.erorr=null;
    },
    [createUser.fulfilled]:(state,action)=>{
      state.user = action.payload
      state.isLoading=false;
      state.erorr=null;
    },
    [createUser.rejected]:(state,action)=>{
      state.isLoading=false;
      state.erorr=action.payload;
    },
  }
})




export default AuthSlice.reducer