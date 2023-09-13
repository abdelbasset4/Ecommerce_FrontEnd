import { ToastContainer } from "react-toastify";
import useGetUserFavoriteProduct from "../../hook/WishList/useGetUserFavoriteProduct";
import { WishlistItem } from "./WishlistItem";
import { useEffect } from "react";
import { useState } from "react";

export default function Wishlist() {
  const [favProd,res] = useGetUserFavoriteProduct()
  
  console.log(res);
  return (
    <div className="px-4 mt-5">
    
    <h2 className="mb-3 ps-3 text-2xl font-extrabold text-gray-900">My wishlist:</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
    {
      res?.data?.length>0 ? (
        res?.data?.map((item)=>(<WishlistItem item={item} favProd={favProd} />))
      ):(<h2>You dont have wishlist</h2>)
    }
       
    </div>
    <ToastContainer/>
    </div>
  )
}
