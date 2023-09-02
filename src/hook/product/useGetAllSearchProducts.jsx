import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../Redux/Slice/product/ProductThunk";

function useGetAllSearchProducts(limit) {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);
  limit = limit || 0;
  let word = "",
    catQuery = "",
    brandQuery = "",
    priceFrom = "",
    priceTo = "",
    priceFromString = "",
    priceToString = "";
  const getProductData = async () => {
    getStorage();
    sortData();
    await dispatch(
      getAllProducts(
        `/api/v1/products?sort=${sort}&limit=${limit}&keyword=${word}&${catQuery}&${brandQuery}${priceFromString}${priceToString}`
      )
    );
  };
  useEffect(() => {
    getProductData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  let pageCount = 0;
  if (products?.paginationResults) {
    pageCount = products?.paginationResults?.numberPages;
  }
  let result = 0;
  if (products?.result) {
    // eslint-disable-next-line no-unused-vars

    result = products?.result;
  }
  const getPageNumber = (page) => {
    getStorage();
    sortData();
    dispatch(
      getAllProducts(
        `/api/v1/products?sort=${sort}&limit=${limit}&page=${page}&keyword=${word}&${catQuery}&${brandQuery}${priceFromString}${priceToString}`
      )
    );
  };
  // eslint-disable-next-line no-unused-vars
  let sortType = "",
    sort;
  const sortData = () => {
    if (localStorage.getItem("sortType") !== null) {
      sortType = localStorage.getItem("sortType");
    } else {
      sortType = "";
    }
    if (sortType === "") {
      sort = "";
    } else if (sortType === "Newest") {
      sort = "+createdAt";
    } else if (sortType === "Popularity") {
      sort = "+sold";
    } else if (sortType === "low-to-height") {
      sort = "+price";
    } else if (sortType === "height-to-low") {
      sort = "-price";
    }
  };
  const getStorage = () => {
    if (localStorage.getItem("searchWord") !== null)
      // eslint-disable-next-line no-const-assign
      word = localStorage.getItem("searchWord");

    if (localStorage.getItem("categoryChecked") !== null)
      // eslint-disable-next-line no-const-assign, no-unused-vars
      catQuery = localStorage.getItem("categoryChecked");
    if (localStorage.getItem("brandChecked") !== null)
      // eslint-disable-next-line no-const-assign, no-unused-vars
      brandQuery = localStorage.getItem("brandChecked");
    if (localStorage.getItem("priceFrom") !== null)
      priceFrom = localStorage.getItem("priceFrom");
    if (localStorage.getItem("priceTo") !== null)
      priceTo = localStorage.getItem("priceTo");

    if (priceFrom === "" || priceFrom <= 0) {
      priceFromString = "";
    } else {
      priceFromString = `&price[gt]=${priceFrom}`;
    }

    if (priceTo === "" || priceTo <= 0) {
      priceToString = "";
    } else {
      priceToString = `&price[lte]=${priceTo}`;
    }
  };
  return [products, pageCount, getPageNumber, result, getProductData];
}

export default useGetAllSearchProducts;
