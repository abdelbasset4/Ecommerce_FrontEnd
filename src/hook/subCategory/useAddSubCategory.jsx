import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Notify from "../../hooks/useNotify";
import { createSubCategory } from "../../Redux/Slice/SubCategory/SubCategoryThunk";
import { getAllCategory } from "../../Redux/Slice/Category/CategoryThunk";

function useAddSubCategory() {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [id, setId] = useState("0");
  const [loading, setLoading] = useState(true);
  const [press, setPress] = useState(false);
  const [files, setFiles] = useState([]);
  useEffect(() => {
    dispatch(getAllCategory(`/api/v1/categories`));
  }, [dispatch]);

  const categories = useSelector((state) => state.category.category);
  const subCategory = useSelector((state) => state.subCategory.subCategory);

  const changeName = (e) => {
    e.persist();
    setName(e.target.value);
  };

  const changeId = (e) => {
    setId(e.target.value);
  };

  const submitData = async (e) => {
    e.preventDefault();
    if (!navigator.onLine) {
      Notify("Connection problem", "warn");
      return;
    }
    if (name === "") {
      Notify("please add name of sub category", "warn");
      return;
    }
    if (id === "0") {
      Notify("please select category", "warn");
      return;
    }
    const formData = new FormData();
    formData.append("name", name);
    formData.append("category", id);

    if(typeof files[0] !== 'undefined') {
      formData.append("image", files[0].file);
    }
    setLoading(true);
    setPress(true);
    await dispatch(createSubCategory(formData));
    setLoading(false);
  };
  useEffect(() => {
    if (loading === false) {
      setName("");
      setLoading(true);
      setPress(false);
      setId("0")
      if (subCategory.status === 201) {
        Notify("Added succsusful", "success");
      } else {
        console.log(subCategory);
        Notify("Added error ", "error");
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading, subCategory.status]);
  return [name,categories, loading, press, changeName,changeId, submitData,files,setFiles];
}

export default useAddSubCategory;
