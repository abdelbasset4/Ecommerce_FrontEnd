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
    setLoading(true);
    setPress(true);
    await dispatch(createSubCategory({ name, category: id }));
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
        Notify("Added error ", "error");
      }
    }
  }, [loading, subCategory.status]);
  return [name,categories, loading, press, changeName,changeId, submitData];
}

export default useAddSubCategory;
