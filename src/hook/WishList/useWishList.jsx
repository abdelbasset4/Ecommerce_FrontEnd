import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createFavoriteProduct, deleteFavoriteProduct } from "../../Redux/Slice/WishList/WishListThunk";
import Notify from "../../hooks/useNotify";
const useWishList = (_id, favProd) => {
    const dispatch = useDispatch();
    const [img,setImg] = useState(false)
    let Fav = favProd?.some(fitem => fitem === _id);
    const [isFav, setIsFav] = useState(Fav)
    const [removeLoading, setRemoveLoading] = useState(true)
    const [addLoading, setAddLoading] = useState(true)
    
    useEffect(() => {
        setIsFav(favProd.some(fitem => fitem === _id))
    }, [favProd])

    const handelFavorite = ()=>{
        if(isFav) { removeToWishListData()}
        else {
            addToWishListData()
        }
    }

    useEffect(() => {
        if (isFav === true) {
            setImg(true)
        }
        else {
            setImg(false)
        }

    }, [isFav])

    // const resAdd = useSelector(state => state.wishlist.wishlist)
    const resLoading = useSelector(state => state.wishlist.isLoading)
    const resRemove = useSelector(state => state.wishlist.deleteWishList)

    // const addToWishListData = async () => {
    //     try {
    //         setIsFav(true);
    //         setImg(true);
    //         setAddLoading(true);
    //         console.log('Before dispatch');
    //         const response = await dispatch(createFavoriteProduct({
    //           productId: _id
    //         }));
    //         console.log(response);
            
    //         if (response && response.payload.status === 200) {
    //             setAddLoading(false);
    //           Notify("Add product to wishlist success", "success");
    //           console.log(img);
    //         //   window.location.reload()
    //         } else if (response && response.payload.status === 401) {
    //           Notify("You are not allowed to add to the wishlist. Please log in first.", "error");
    //         }
    //       } catch (error) {
    //         console.error(error);
    //       }
    // }

    const addToWishListData = () => {
        setIsFav(true);
        setImg(true);
        setAddLoading(true);
        console.log('Before dispatch');
      
        dispatch(createFavoriteProduct({ productId: _id }))
          .then((response) => {
      
            if (response && response.payload.status === 200) {
              setAddLoading(false);
              Notify("Add product to wishlist success", "success");
              setTimeout(() => {
                window.location.reload()
              }, 3000);
            } else if (response && response.payload.status === 401) {
              Notify(
                "You are not allowed to add to the wishlist. Please log in first.",
                "error"
              );
            }
          })
          .catch((error) => {
            console.error(error);
          });
      };
      


    const removeToWishListData = async () => {
        setIsFav(false)
        setImg(false)
        setRemoveLoading(true)
        await dispatch(deleteFavoriteProduct(`/api/v1/wishlist/${_id}`))
        setRemoveLoading(false)
      
    }


    useEffect(() => {
        if (removeLoading === false) {
            if (resRemove=== "succeeded") {
                Notify("Delete product from wishlist success ", "success")
            } else {
                Notify(" delete error ", "error")
            }

        }
    }, [removeLoading])

    return [handelFavorite,img,removeToWishListData]
}

export default useWishList