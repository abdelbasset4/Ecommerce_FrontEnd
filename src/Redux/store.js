import { configureStore } from '@reduxjs/toolkit'
import CategorySlice from './Slice/Category/CategorySlice'
import BrandSlice from './Slice/Brand/BrandSlice'
import SubCategorySlice from './Slice/SubCategory/SubCategorySlice'
import ProductSlice from './Slice/product/ProductSlice'
import AuthSlice from './Slice/Auth/AuthSlice'
import ReviewSlice from './Slice/Review/ReviewSlice'
import WishListSlice from './Slice/WishList/WishListSlice'
import CouponSlice from './Slice/Coupon/CouponSlice'
import AdressesSlice from './Slice/Adresses/AdressesSlice'
import CartSlice from './Slice/Cart/CartSlice'
import orderSlice from './Slice/Order/orderSlice'
export const store = configureStore({
  reducer: {
    category:CategorySlice,
    brand:BrandSlice,
    subCategory:SubCategorySlice,
    product:ProductSlice,
    auth:AuthSlice,
    review:ReviewSlice,
    wishlist:WishListSlice,
    coupon:CouponSlice,
    adress:AdressesSlice,
    cart:CartSlice,
    order:orderSlice
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    })
  ,devTools:true
})