import { WishlistItem } from "./WishlistItem";

export default function Wishlist() {
  return (
    <div className="px-4 mt-5">
    
    <h2 className="mb-3 ps-3 text-2xl font-extrabold text-gray-900">My wishlist:</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
        <WishlistItem/>
        <WishlistItem/>
        <WishlistItem/>
        <WishlistItem/>
        <WishlistItem/>
        <WishlistItem/>
        <WishlistItem/>
        <WishlistItem/>
    </div>
    </div>
  )
}
