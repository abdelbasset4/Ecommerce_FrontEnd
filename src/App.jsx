import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Fragment, Suspense, lazy } from "react";
import RootLayout from "./Layout/RootLayout";
import DefaultLayout from "./Layout/DefaultLayout";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Auth/Login";
import Register from "./Pages/Auth/Register";
import SearchPage from "./Pages/Search/SearchPage";
import ProductDetalisPage from "./Pages/Product/ProductDetailsPage";
import ECommerce from "./Pages/Dashboard/Dashboard/ECommerce";
import Loader from "./common/Loader";
import CartPage from "./Pages/Cart/CartPage";
import CheckoutPage from "./Pages/Checkout/CheckoutPage";
import Orders from "./Pages/Dashboard/Mange/Order/Orders";
import Products from "./Pages/Dashboard/Mange/Product/Products";
import AddProduct from "./Pages/Dashboard/Mange/Product/AddProduct";
import AddBrand from "./Pages/Dashboard/Mange/Brand/AddBrand";
import AddCategory from "./Pages/Dashboard/Mange/Category/AddCategory";
import AddSubCategory from "./Pages/Dashboard/Mange/SubCategory/AddSubCategory";
import ProfilePage from "./Pages/Profile/ProfilePage";
import OrdersPage from "./Pages/Profile/OrdersPage";
import WishListPage from "./Pages/WishList/WishListPage";
import AllCategoryPage from "./Pages/Category/AllCategoryPage";
import AllBrandPage from "./Pages/Brand/AllBrandPage";
import EditProduct from "./Pages/Dashboard/Mange/Product/EditProduct";
import Brand from "./Pages/Dashboard/Mange/Brand/Brand";
import Category from "./Pages/Dashboard/Mange/Category/Category";
import SubCategory from "./Pages/Dashboard/Mange/SubCategory/SubCategory";
import ForgotPassword from "./Pages/Auth/ForgotPassword";
import ResetCode from "./Pages/Auth/ResetCode";
import ResetPassword from "./Pages/Auth/ResetPassword";
import EditBrand from "./Pages/Dashboard/Mange/Brand/EditBrand";
import EditCategory from "./Pages/Dashboard/Mange/Category/EditCategory";
import EditSubCategory from "./Pages/Dashboard/Mange/SubCategory/EditSubCategory";
import SignUp from "./Pages/AuthFormik/SignUp";

const Settings = lazy(() => import("./Pages/Dashboard/Settings"));
const router = createBrowserRouter(
  createRoutesFromElements(
    <Fragment>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="user/forgotpassword" element={<ForgotPassword />} />
        <Route path="user/reset-code" element={<ResetCode />} />
        <Route path="user/reset-password" element={<ResetPassword />} />
        <Route path="signup" element={<Register />} />
        <Route path="register" element={<SignUp />} />
        <Route path="search" element={<SearchPage />} />
        <Route path="search/products/:id" element={<ProductDetalisPage />} />
        <Route path="cart" element={<CartPage />} />
        <Route path="checkout" element={<CheckoutPage />} />
        <Route path="myprofile" element={<ProfilePage />} />
        <Route path="myorders" element={<OrdersPage />} />
        <Route path="wishlist" element={<WishListPage />} />
        <Route path="categories" element={<AllCategoryPage />} />
        <Route path="brands" element={<AllBrandPage />} />
      </Route>

      <Route element={<DefaultLayout />}>
        <Route
          path="dashboard"
          element={
            <Suspense fallback={<Loader />}>
              <ECommerce />
            </Suspense>
          }
        />
        <Route
          path="dashboard/orders"
          element={
            <Suspense fallback={<Loader />}>
              <Orders />
            </Suspense>
          }
        />
        <Route
          path="dashboard/products"
          element={
            <Suspense fallback={<Loader />}>
              <Products />
            </Suspense>
          }
        />
        <Route
          path="dashboard/addproduct"
          element={
            <Suspense fallback={<Loader />}>
              <AddProduct />
            </Suspense>
          }
        />
        <Route
          path="dashboard/editproduct/:id"
          element={
            <Suspense fallback={<Loader />}>
              <EditProduct />
            </Suspense>
          }
        />
        <Route
          path="dashboard/brands"
          element={
            <Suspense fallback={<Loader />}>
              <Brand />
            </Suspense>
          }
        />
        <Route
          path="dashboard/addbrand"
          element={
            <Suspense fallback={<Loader />}>
              <AddBrand />
            </Suspense>
          }
        />
        <Route
          path="dashboard/editbrand/:id"
          element={
            <Suspense fallback={<Loader />}>
              <EditBrand />
            </Suspense>
          }
        />
        <Route
          path="dashboard/addcategory"
          element={
            <Suspense fallback={<Loader />}>
              <AddCategory />
            </Suspense>
          }
        />
        <Route
          path="dashboard/category"
          element={
            <Suspense fallback={<Loader />}>
              <Category />
            </Suspense>
          }
        />
        <Route
          path="dashboard/editcategory/:id"
          element={
            <Suspense fallback={<Loader />}>
              <EditCategory />
            </Suspense>
          }
        />
        <Route
          path="dashboard/addsubcategory"
          element={
            <Suspense fallback={<Loader />}>
              <AddSubCategory />
            </Suspense>
          }
        />
        <Route
          path="dashboard/subcategory"
          element={
            <Suspense fallback={<Loader />}>
              <SubCategory />
            </Suspense>
          }
        />
        <Route
          path="dashboard/editsubcategory/:id"
          element={
            <Suspense fallback={<Loader />}>
              <EditSubCategory />
            </Suspense>
          }
        />
        <Route
          path="settings"
          element={
            <Suspense fallback={<Loader />}>
              <Settings />
            </Suspense>
          }
        />
      </Route>
    </Fragment>
  )
);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
