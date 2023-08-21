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
      sortData()
    await dispatch(getAllProducts(`/api/v1/products?sort=${sort}&limit=${limit}&keyword=${word}`));
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
      sortData()
    dispatch(getAllProducts(`/api/v1/products?sort=${sort}&limit=${limit}&page=${page}&keyword=${word}`));
  };
  // eslint-disable-next-line no-unused-vars
  let sortType = "", sort;
  const sortData = ()=>{
    if (localStorage.getItem("sortType") !== null){
      sortType = localStorage.getItem("sortType")
    }else{
      sortType = ""
    }
    if(sortType ===""){
      sort = ""
    }else if(sortType ==="Newest"){
      sort = "+createdAt"
    }else if(sortType ==="Popularity"){
      sort = "+sold"
    }else if(sortType ==="low-to-height"){
      sort = "+price"
    
    }else if(sortType ==="height-to-low"){
      sort = "-price"
    }
  }
  return [products, pageCount, getPageNumber,result,getProductData];
}

export default useGetAllSearchProducts;
