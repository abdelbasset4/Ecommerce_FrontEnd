import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Notify from "../../hooks/useNotify";
import { createBrand } from "../../Redux/Slice/Brand/BrandThunk";

function useAddBrand() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(true);
  const [press, setPress] = useState(false);
  const [files, setFiles] = useState([]);
  const res = useSelector((state) => state.brand.brand);

  const changeName = (e) => {
    e.persist();
    setName(e.target.value);
  };

  const submitData = async (e) => {
    e.preventDefault();
    if (name === "" ) {
      Notify("there are some problems with add", "warn");
      return;
    }
    const formData = new FormData();
    formData.append("name", name);
    formData.append("image", files[0].file);
    setLoading(true);
    setPress(true);
    await dispatch(createBrand(formData));
    setLoading(false);
  };
  useEffect(() => {
    if (loading === false) {
      setName("");
      setFiles([])
      setLoading(true);
      setPress(false);
      if (res.status === 201) {
        Notify("Added succsusful", "success");
      } else {
        Notify("Added error ", "error");
      }
    }
  }, [loading, res.status]);
  return [
    name,
    loading,
    press,
    changeName,
    submitData,
    files,
    setFiles
  ];
}

export default useAddBrand;
