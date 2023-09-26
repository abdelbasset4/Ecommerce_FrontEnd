import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProductsByCategory } from "../../Redux/Slice/product/ProductThunk";
function useGetAllproductByCateory(categoryId, limit) {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const getProducts = async () => {
      await dispatch(
        getAllProductsByCategory(`/api/v1/products?category=${categoryId}&limit=${limit}`)
      );
    };
    setIsLoading(true);
    getProducts();
    setIsLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoryId]);
  // let pageCount = 0;
  // if (products.paginationResults) {
  //   pageCount = products.paginationResults.numberPages;
  // }

  const getPageNumber = async (page) => {
    setIsLoading(true);
    await dispatch(
      getAllProductsByCategory(
        `/api/v1/products?category=${categoryId}&limit=${limit}&page=${page}`
      )
    );
    setIsLoading(false);
  };
  const products = useSelector((state) => state.product.productByCategory);
  let items = [];
  let pagination = [];
  try {
    if (products.data) items = products.data;
    else items = [];
  } catch (e) {}
  try {
    if (products.paginationResult)
      pagination = products.paginationResult.numberOfPages;
    else pagination = [];
  } catch (e) {}

  console.log(items);
  return [items, isLoading, pagination, getPageNumber];
}

export default useGetAllproductByCateory;
