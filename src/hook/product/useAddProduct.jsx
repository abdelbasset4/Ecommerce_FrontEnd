import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategory } from "../../Redux/Slice/Category/CategoryThunk";
import { getAllBrand } from "../../Redux/Slice/Brand/BrandThunk";
import { createProduct } from "../../Redux/Slice/product/ProductThunk";
import { getAllSubCategoryOnCatID } from "../../Redux/Slice/SubCategory/SubCategoryThunk";
import Notify from '../../hooks/useNotify';

function useAddProduct() {
    const dispatch = useDispatch();
 // States
 const [name, setName] = useState("");
 const [description, setDescription] = useState("");
 const [priceBefore, setPriceBefore] = useState(0);
 const [priceAfter, setPriceAfter] = useState(0);
 const [quantity, setQuantity] = useState(0);
 const [categoryId, setCategoryID] = useState("");
 const [selectSubCategoryId, setSelectSubCategoryID] = useState([]);
 const [brandId, setBrandID] = useState("");
 const [loading, setLoading] = useState(true);
 const [images, setImages] = useState([]);
 const [imageCover, setImageCover] = useState([]);
 const [showColor, setShowColor] = useState(false);
 const [colors, setColors] = useState([]);
 const [options, setOptions] = useState([]);

//  select all category sub category brand in redux
const categories = useSelector((state) => state.category.category);
const brands = useSelector((state) => state.brand.brand);
const subCategory = useSelector((state) => state.subCategory.subCategory);

// option for upload image cover and images
const optionsMultipleImages = {
    multiple: true,
    accept: "/*",
  };
  const optionsSingleImage = {
    multiple: false,
    accept: "/*",
  };

 const submitHandlerImageCover = (file) => {
    setImageCover(file);
 };

 const submitHandlerImages = (files) => {
    setImages(files);
 };
 
 const onSelectSubCategory = (selectedList) => {
   setSelectSubCategoryID(selectedList);
 };
 const onRemoveSubCategory = (selectedList) => {
   setSelectSubCategoryID(selectedList);
 };

//  put categories and brand in selectbox when component render
 useEffect(() => {
   dispatch(getAllCategory(`/api/v1/categories`));
   dispatch(getAllBrand(`/api/v1/brands`));
 }, [dispatch]);

 const changeName = (e)=>{
    setName(e.target.value);
 }
 const changeDescription = (e)=>{
    setDescription(e.target.value)
 }
 const changePriceBefore = (e)=>{
    setPriceBefore(e.target.value)
 }
 const changePriceAfter = (e)=>{
    setPriceAfter(e.target.value)
 }
 const changeQuantity = (e)=>{
    setQuantity(e.target.value)
 }
 const getBrandId = (e) => {
    setBrandID(e.target.value);
  };
  const showColorPicker = () => {
    setShowColor(!showColor);
  };
  const removeColor = (color) => {
    const removedArray = colors.filter((e) => color !== e);
    setColors(removedArray);
  };
  const handleColorCompleteChange = (color) => {
    setColors([...colors, color.hex]);
    setShowColor(!showColor);
  };
  
 const getCategoryId = async (e) => {
   if (e.target.value != "0") {
     try {
       setCategoryID(e.target.value);
       await dispatch(
         getAllSubCategoryOnCatID(
           `/api/v1/categories/${e.target.value}/subcategories`
         )
       );
     } catch (error) {
       console.error("Error occurred during dispatch:", error);
     }
   }
 };
//  fill sub category option based on category id
 useEffect(() => {
   const updateOptions = async () => {
     if (categoryId !== "0") {
       if (subCategory.data) {
         setOptions(subCategory.data);
       }
     }
   };
   updateOptions();
   // eslint-disable-next-line react-hooks/exhaustive-deps
 }, [categoryId, subCategory.data]);


//  submit form to add product
 const hundelSubmit = async (e) => {
   e.preventDefault();
   if(categoryId ==="0" || name ===""|| description==="" || priceBefore === 0 || imageCover.length <=0 || quantity ===""){
     Notify("there are problem with added","warn")
     return;
   }
   const formData = new FormData();
   formData.append("title", name);
   formData.append("description", description);
   formData.append("quantity", quantity);
   formData.append("price", priceBefore);
   formData.append("priceAfterDiscount", priceAfter);
   formData.append("imageCover", imageCover[0].name);
   formData.append("category", categoryId);
   formData.append("brand", brandId);
   colors.map((color) => formData.append("colors", color));

   const filesSelected = images.map(({ name }) => name);
   filesSelected.map((item) => formData.append("images", item));

   const subCategoryIDs = selectSubCategoryId.map((item) => item._id);

   if (subCategoryIDs.every((id) => typeof id === "string")) {
     subCategoryIDs.map((item) => formData.append("subcategories", item));
   }else{
     console.log("there are problem");
   }
   setLoading(true)
   await dispatch(createProduct(formData));
   setLoading(false)
 };
 const products = useSelector(state => state.product.products)

//  reset inputs and show notification
 useEffect(()=>{
   if(loading ===false){
     setName('')
     setDescription('')
     setPriceAfter(0)
     setPriceBefore(0)
     setQuantity(0)
     setBrandID("0")
     setCategoryID("0")
     setColors([])
     setImageCover([])
     setImages([])
     setSelectSubCategoryID([])
     setTimeout(() => setLoading(true), 1500)
     if(products.status ===201){
       Notify("Added succsusful","success");
       
     }else{
       Notify("Added error ","error");

     }
   }
 // eslint-disable-next-line react-hooks/exhaustive-deps
 },[loading])
 return [name,description,priceAfter,priceBefore,quantity,categoryId,colors,brandId,images,showColor,options,optionsMultipleImages,optionsSingleImage,categories,brands,changeName,changeDescription,changePriceBefore,changePriceAfter,changeQuantity,submitHandlerImageCover,submitHandlerImages,onSelectSubCategory,onRemoveSubCategory,getBrandId,getCategoryId,showColorPicker,removeColor,handleColorCompleteChange,hundelSubmit]
}

export default useAddProduct