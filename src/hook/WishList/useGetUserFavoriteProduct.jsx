import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getUserWishList } from "../../Redux/Slice/WishList/WishListThunk"

const useGetUserFavoriteProduct = () => {
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(true)
    const [favProd, setFavProd] = useState([])
    const res = useSelector(state => state.wishlist.wishlist)

    useEffect(() => {
      const get = async () => {
        setLoading(true)
        await dispatch(getUserWishList(`/api/v1/wishlist/`))
        setLoading(false)
      }
      get()
    }, [])

    useEffect(() => {
        if (loading === false) {
            if (res.data.length >= 1) {
                setTimeout(() => {
                  setFavProd(res.data.map(item => item._id))
                }, 0);
            } else setFavProd([])
        }
    }, [loading])
    
    return [favProd]
    
}

export default useGetUserFavoriteProduct