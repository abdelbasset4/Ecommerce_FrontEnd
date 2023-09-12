import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllReviewOnProduct } from "../../Redux/Slice/Review/ReviewThunk";
const useGetProductReviews = (id,limit) => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true)
    const allReview = useSelector((state) => state.review.allReviewProduct)

    useEffect(() => {
      setLoading(true)
        dispatch(getAllReviewOnProduct(`/api/v1/products/${id}/reviews?limit=${limit}&page=${1}`))
      setLoading(false)
    }, [])
    let pageCount = 0;
    if(allReview.paginationResults) {pageCount = allReview.paginationResults.numberPages;}
    const getPageNumber = async (page) => {
        await dispatch(getAllReviewOnProduct(`/api/v1/products/${id}/reviews?limit=${limit}&page=${page}`))
    }

    return [allReview,pageCount,getPageNumber]
}

export default useGetProductReviews