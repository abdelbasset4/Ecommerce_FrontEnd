import RootLayout from "./Layout/RootLayout"
import Home from "./Pages/Home/Home"
import Login from "./Pages/Auth/Login"
import Register from "./Pages/Auth/Register"
import {createBrowserRouter, 
  createRoutesFromElements,
  Route, 
  RouterProvider} from 'react-router-dom'
import SearchPage from "./Pages/Search/SearchPage"


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout/>}>
      <Route index element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Register />} />
      <Route path="search" element={<SearchPage/>} />
    </Route>

  )

)
function App() {
  
  return (
    <RouterProvider router={router} />
   
  )
}

export default App



