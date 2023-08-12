import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../Redux/Slice/product/ProductThunk";
function useGetAllSearchProducts(limit) {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);
  useEffect(() => {
    dispatch(getAllProducts(`/api/v1/products?limit=${limit}`));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  let pageCount = 0;
  if (products.paginationResults) {
    pageCount = products.paginationResults.numberPages;
  }

  const getPageNumber = (page) => {
    dispatch(getAllProducts(`/api/v1/products?limit=${limit}&page=${page}`));
  };

  return [products, pageCount, getPageNumber];
}

export default useGetAllSearchProducts;
