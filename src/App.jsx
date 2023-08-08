import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Fragment, Suspense, lazy } from "react";
import RootLayout from "./Layout/RootLayout";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Auth/Login";
import Register from "./Pages/Auth/Register";
import SearchPage from "./Pages/Search/SearchPage";
import ProductDetalisPage from "./Pages/Product/ProductDetailsPage";
import ECommerce from "./Pages/Dashboard/Dashboard/ECommerce";
import Loader from "./common/Loader";
import CartPage from "./Pages/Cart/CartPage";
import CheckoutPage from "./Pages/Checkout/CheckoutPage";
import Orders from "./Pages/Dashboard/Mange/Orders";
import Products from "./Pages/Dashboard/Mange/Products";
import AddProduct from "./Pages/Dashboard/Mange/AddProduct";
import Brand from "./Pages/Dashboard/Mange/Brand";
import Category from "./Pages/Dashboard/Mange/Category";
import SubCategory from "./Pages/Dashboard/Mange/SubCategory";
import ProfilePage from "./Pages/Profile/ProfilePage";
import OrdersPage from "./Pages/Profile/OrdersPage";
import WishListPage from "./Pages/WishList/WishListPage";
import AllCategoryPage from "./Pages/Category/AllCategoryPage";
import AllBrandPage from "./Pages/Brand/AllBrandPage";

const Chart = lazy(() => import("./Pages/Dashboard/Chart"));
const FormElements = lazy(() => import("./Pages/Dashboard/Form/FormElements"));
const FormLayout = lazy(() => import("./Pages/Dashboard/Form/FormLayout"));
const Settings = lazy(() => import("./Pages/Dashboard/Settings"));
const Tables = lazy(() => import("./Pages/Dashboard/Tables"));
const Alerts = lazy(() => import("./Pages/Dashboard/UiElements/Alerts"));
const Buttons = lazy(() => import("./Pages/Dashboard/UiElements/Buttons"));
const DefaultLayout = lazy(() => import("./Layout/DefaultLayout"));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Fragment>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Register />} />
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
          path="/dashboard"
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
          path="dashboard/brands"
          element={
            <Suspense fallback={<Loader />}>
              <Brand />
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
          path="dashboard/subcategory"
          element={
            <Suspense fallback={<Loader />}>
              <SubCategory />
            </Suspense>
          }
        />
        <Route
          path="forms/form-elements"
          element={
            <Suspense fallback={<Loader />}>
              <FormElements />
            </Suspense>
          }
        />
        <Route
          path="forms/form-layout"
          element={
            <Suspense fallback={<Loader />}>
              <FormLayout />
            </Suspense>
          }
        />
        <Route
          path="tables"
          element={
            <Suspense fallback={<Loader />}>
              <Tables />
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
        <Route
          path="chart"
          element={
            <Suspense fallback={<Loader />}>
              <Chart />
            </Suspense>
          }
        />
        <Route
          path="ui/alerts"
          element={
            <Suspense fallback={<Loader />}>
              <Alerts />
            </Suspense>
          }
        />
        <Route
          path="ui/buttons"
          element={
            <Suspense fallback={<Loader />}>
              <Buttons />
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
