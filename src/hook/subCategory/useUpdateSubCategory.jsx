import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { baseURL } from "../../API/mainBaseURL";
import Notify from "../../hooks/useNotify";
import { getOneSubCategory, updateSubCategory } from "../../Redux/Slice/SubCategory/SubCategoryThunk";
import { getAllCategory } from "../../Redux/Slice/Category/CategoryThunk";
const useUpdateSubCategory = (subCategoryId) => {
  const dispatch = useDispatch();
  // States
  const [name, setName] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const changeName = (e) => {
    setName(e.target.value);
  };
  const changeId = (e) => {
    setCategoryId(e.target.value);
  };
  const subCategory = useSelector((state) => state.subCategory.subCategory);
  const categories = useSelector((state) => state.category.category);
  useEffect(() => {
    const run = async () => {
      await dispatch(getAllCategory(`/api/v1/categories`));
      await dispatch(getOneSubCategory(`/api/v1/subcategories/${subCategoryId}`));
    };
    run();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    if(subCategory.data){
      setName(subCategory.data.name);
      console.log(subCategory.data.category);
      setFiles(`${baseURL}/subcategories/${subCategory.data.image}`);
      if(subCategory.data.category) setCategoryId(subCategory.data.category._id)
    }
  }, [subCategory])
  
  //  submit form to update the brand
  const hundelSubmit = async (e) => {
    e.preventDefault();
    if (name === "") {
      Notify("name sub category is required", "warn");
      return;
    }
    const formData = new FormData();
    formData.append("name", name);
    formData.append("category", categoryId);
    if(files[0].file ===undefined){
      formData.append("image",subCategory.data.image);
    }else{
      formData.append("image",files[0].file);
    }
      setLoading(true);
      let args = [subCategory.data._id, formData];
      await dispatch(updateSubCategory(args));
      setLoading(false);

  };
  const updateSub= useSelector((state) => state.subCategory.updateSubCategory);
    //  reset inputs and show notification
    useEffect(() => {
      if (loading === false) {
        setName("");
        setTimeout(() => setLoading(true), 1500);
        if (updateSub) {
          if (updateSub.status === 200) {
            Notify("Update succsusful", "success");
          } else {
            Notify("Update error ", "error");
          }
        }
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [loading]);
  
    return [name,categoryId,categories,files,changeName,changeId,setFiles,hundelSubmit]
}

export default useUpdateSubCategory