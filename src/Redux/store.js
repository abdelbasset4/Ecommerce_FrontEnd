import { configureStore } from '@reduxjs/toolkit'
import CategorySlice from './Slice/Category/CategorySlice'
import BrandSlice from './Slice/Brand/BrandSlice'
import SubCategorySlice from './Slice/SubCategory/SubCategorySlice'
export const store = configureStore({
  reducer: {
    category:CategorySlice,
    brand:BrandSlice,
    subCategory:SubCategorySlice
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    })
  ,devTools:true
})