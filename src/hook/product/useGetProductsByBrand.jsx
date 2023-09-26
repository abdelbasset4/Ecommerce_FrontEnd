import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts, getAllProductsByBrand } from "../../Redux/Slice/product/ProductThunk";
function useGetProductsByBrand(brandId, limit) {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const getProducts = async () => {
      await dispatch(
        getAllProductsByBrand(`/api/v1/products?brand=${brandId}&limit=${limit}`)
      );
    };
    setIsLoading(true);
    getProducts();
    setIsLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [brandId]);


  const getPageNumber = async (page) => {
    setIsLoading(true);
    await dispatch(
      getAllProductsByBrand(
        `/api/v1/products?brand=${brandId}&limit=${limit}&page=${page}`
      )
    );
    setIsLoading(false);
  };
  const products = useSelector((state) => state.product.productByBrand);
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

export default useGetProductsByBrand;
