import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategory } from "../../Redux/Slice/Category/CategoryThunk";
import { getAllBrand } from "../../Redux/Slice/Brand/BrandThunk";
import { useState } from "react";
import useGetAllSearchProducts from "../product/useGetAllSearchProducts";

function useSideBarFilter() {
  const dispatch = useDispatch();
    const [,,,,getProductData] = useGetAllSearchProducts()
  useEffect(() => {
    const get = async () => {
      await dispatch(getAllCategory(`/api/v1/categories`));
      await dispatch(getAllBrand(`/api/v1/brands`));
    };
    get();
  }, [dispatch]);

  const categories = useSelector((state) => state.category.category);
  const brands = useSelector((state) => state.brand.brand);

  let allBrand,
    allCategory = [];
  if (brands.data) {
    // eslint-disable-next-line no-unused-vars
    allBrand = brands.data;
  }
  if (categories.data) {
    // eslint-disable-next-line no-unused-vars
    allCategory = categories.data;
  }
  const [checkCategory, setCheckCategory] = useState([]);
  const [checkBrand, setCheckBrand] = useState([]);
  const [lowPrice, setLowPrice] = useState(0);
  const [heightPrice, setHeightPrice] = useState(0);
  const onChangeInput = (e) => {
    let value = e.target.value;
    let name = e.target.name;

    if (name === "Category") {
      if (e.target.checked === true) {
        setCheckCategory([...checkCategory, value]);
      } else if (e.target.checked === false) {
        const newArry = checkCategory.filter((e) => e !== value);
        setCheckCategory(newArry);
      }
    } else if (name === "Brand") {
      if (e.target.checked === true) {
        setCheckBrand([...checkBrand, value]);
      } else if (e.target.checked === false) {
        const newArry = checkBrand.filter((e) => e !== value);
        setCheckBrand(newArry);
      }
    }
  };
  const priceFrom = (e) => {
    localStorage.setItem("priceFrom", e.target.value);
    setLowPrice(e.target.value);
  }
  const priceTo = (e) => {
    localStorage.setItem("priceTo", e.target.value);
    setHeightPrice(e.target.value);
  }
  // const onChangePriceRange = (e) => {
  //   let value = e.target.value;
  //   if (e.target.checked === true) {
  //     setCheckPrice([...checkPrice, value]);
  //   } else if (e.target.checked === false) {
  //     const newArry = checkPrice.filter((e) => e !== value);
  //     setCheckPrice(newArry);
  //   }
  // };
  let queryCategory ="",queryBrand ="";
  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    queryCategory =  checkCategory.map(val => "category[in][]=" + val).join("&")
    localStorage.setItem("categoryChecked", queryCategory)
    setTimeout(() => {
        getProductData()
    }, 1000);
  }, [checkCategory])

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    queryBrand = checkBrand.map(val => "brand[in][]=" + val).join("&")
    localStorage.setItem("brandChecked", queryBrand)
    setTimeout(() => {
        getProductData()
    }, 1000);
  }, [checkBrand])
  useEffect(() => {
    setTimeout(() => {
      getProductData();
    }, 1000);
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [lowPrice, heightPrice])
  return [allBrand, allCategory, onChangeInput,priceFrom,priceTo];
}

export default useSideBarFilter;
