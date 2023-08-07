import { configureStore } from '@reduxjs/toolkit'
import CategorySlice from './Slice/Category/CategorySlice'
import BrandSlice from './Slice/Brand/BrandSlice'
import SubCategorySlice from './Slice/SubCategory/SubCategorySlice'
import ProductSlice from './Slice/product/ProductSlice'
export const store = configureStore({
  reducer: {
    category:CategorySlice,
    brand:BrandSlice,
    subCategory:SubCategorySlice,
    product:ProductSlice
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    })
  ,devTools:true
})