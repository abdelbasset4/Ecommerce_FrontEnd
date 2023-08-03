import { configureStore } from '@reduxjs/toolkit'
import CategorySlice from './Slice/Category/CategorySlice'
import BrandSlice from './Slice/Brand/BrandSlice'
export const store = configureStore({
  reducer: {
    category:CategorySlice,
    brand:BrandSlice
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    })
  ,devTools:true
})