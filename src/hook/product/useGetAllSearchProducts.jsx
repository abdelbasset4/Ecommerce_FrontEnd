import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../Redux/Slice/product/ProductThunk";

function useGetAllSearchProducts(limit) {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);

  const getProductData = async()=>{
    let word = ""
    if(localStorage.getItem("searchWord"))
      // eslint-disable-next-line no-const-assign
      word = localStorage.getItem("searchWord")
    await dispatch(getAllProducts(`/api/v1/products?limit=${limit}&keyword=${word}`));
  }
  useEffect(() => {
    getProductData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  let pageCount = 0;
  if (products.paginationResults) {
    
    pageCount = products.paginationResults.numberPages;
  }
  let result = 0;
  if (products.result) {
    // eslint-disable-next-line no-unused-vars

    result = products.result;
  }
  const getPageNumber = (page) => {
    let word = ""
    if(localStorage.getItem("searchWord"))
      // eslint-disable-next-line no-const-assign
      word = localStorage.getItem("searchWord")
    dispatch(getAllProducts(`/api/v1/products?limit=${limit}&page=${page}&keyword=${word}`));
  };

  return [products, pageCount, getPageNumber,result,getProductData];
}

export default useGetAllSearchProducts;
