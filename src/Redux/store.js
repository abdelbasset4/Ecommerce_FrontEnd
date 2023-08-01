import { configureStore } from '@reduxjs/toolkit'
import CategorySlice from './Slice/Category/CategorySlice'
export const store = configureStore({
  reducer: {
    category:CategorySlice
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    })
  ,devTools:true
})