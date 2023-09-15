import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCoupons } from "../../Redux/Slice/Coupon/CouponThunk";
const useGetAllCoupons = (limit) => {
    const dispatch = useDispatch();
    const coupons = useSelector(state => state.coupon.coupon);
    
    useEffect(() => {
        dispatch(getAllCoupons(`/api/v1/coupons?limit=${limit}`));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch]);
      let pageCount = 0;
      if(coupons?.paginationResults) {pageCount = coupons?.paginationResults?.numberPages;}
      
    const getPageNumber =(page)=>{
      dispatch(getAllCoupons(`/api/v1/coupons?limit=${limit}&page=${page}`));
    }

    return [coupons,pageCount,getPageNumber]
}

export default useGetAllCoupons