import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOneCategory, updateCategory } from "../../Redux/Slice/Category/CategoryThunk";
import { baseURL } from "../../API/mainBaseURL";
import Notify from "../../hooks/useNotify";

const useUpdateCategory = (categoryId) => {
  const dispatch = useDispatch();
  // States
  const [name, setName] = useState("");
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const changeName = (e) => {
    setName(e.target.value);
  };
  const category = useSelector((state) => state.category.category);

  useEffect(() => {
    const run = async () => {
      await dispatch(getOneCategory(`/api/v1/categories/${categoryId}`));
    };
    run();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
console.log(category);
  useEffect(() => {
    if(category.data){
      setName(category.data.name);
      setFiles(`${baseURL}/categories/${category.data.image}`);
    }
  }, [category])
  
  //  submit form to add product
  const hundelSubmit = async (e) => {
    e.preventDefault();
    if (name === "") {
      Notify("name category is required", "warn");
      return;
    }
    const formData = new FormData();
    formData.append("name", name);
    if(files[0].file ===undefined){
      formData.append("image",category.data.image);
    }else{
      formData.append("image",files[0].file);
    }
      setLoading(true);
      let args = [category.data._id, formData];
      await dispatch(updateCategory(args));
      setLoading(false);

  };
  const updateCat= useSelector((state) => state.category.updateCategory);
    //  reset inputs and show notification
    useEffect(() => {
      if (loading === false) {
        setName("");
        setTimeout(() => setLoading(true), 1500);
        if (updateCat) {
          if (updateCat.status === 200) {
            Notify("Update succsusful", "success");
          } else {
            Notify("Update error ", "error");
          }
        }
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [loading]);
  
    return [name,files,changeName,setFiles,hundelSubmit]
}

export default useUpdateCategory