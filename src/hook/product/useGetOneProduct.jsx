import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOneProduct, getProductsLookLike } from "../../Redux/Slice/product/ProductThunk";
import { getOneBrand } from "../../Redux/Slice/Brand/BrandThunk";
import { getAllSubCategoryOnCatID } from "../../Redux/Slice/SubCategory/SubCategoryThunk";
function useGetOneProduct(id) {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product.product);
  useEffect(() => {
    dispatch(getOneProduct(`/api/v1/products/${id}`));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  let items = [];
  if (product.data) items = product.data;

  useEffect(() => {
    if (items.brand) dispatch(getOneBrand(`/api/v1/brands/${items.brand}`));
    if (items.subcategories)
      dispatch(
        getAllSubCategoryOnCatID(
          `/api/v1/categories/${items.category._id}/subcategories`
        )
      );
    if(items.category)
            dispatch(getProductsLookLike(`/api/v1/products?category=${items.category._id}`))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items]);
  const oneBrand = useSelector((state) => state.brand.oneBrand);
  const subCategory = useSelector((state) => state.subCategory.subCategory);
  const products = useSelector((state) => state.product.products);
  let brand = [];
  let subCategories = [];
  let productsLookLike = []
  if (oneBrand) brand = oneBrand;
  if (subCategory) subCategories = subCategory;
  if(products) productsLookLike = products
  let productsWithoutThisProd 
  if(productsLookLike.data) productsWithoutThisProd = productsLookLike.data.filter((product)=>product._id !== items._id)
  return [items, brand, subCategories,productsWithoutThisProd];
}

export default useGetOneProduct;
