import {createBrowserRouter, 
  createRoutesFromElements,
  Route, 
  RouterProvider} from 'react-router-dom'
  
import RootLayout from "./Layout/RootLayout"
import Home from "./Pages/Home/Home"
import Login from "./Pages/Auth/Login"
import Register from "./Pages/Auth/Register"
import SearchPage from "./Pages/Search/SearchPage"
import ProductDetalisPage from "./Pages/Product/ProductDetailsPage"


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout/>}>
      <Route index element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Register />} />
      <Route path="search" element={<SearchPage/>} />
      <Route path="/products/:id" element={<ProductDetalisPage />} />
    </Route>

  )

)
function App() {
  
  return (
    <RouterProvider router={router} />
   
  )
}

export default App



