import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useRef } from "react";
import Notify from "../../hooks/useNotify";
import cloudComputing from "../../assets/uploadImage/cloudComputing.png";
import { createBrand } from "../../Redux/Slice/Brand/BrandThunk";

function useAddBrand() {
  const inputRef = useRef(null);
  const dispatch = useDispatch();
  const [img, setImg] = useState(cloudComputing);
  const [selectedFile, setSelectedFile] = useState(null);
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(true);
  const [press, setPress] = useState(false);

  const res = useSelector((state) => state.brand.brand);

  const changeName = (e) => {
    e.persist();
    setName(e.target.value);
  };
  const changeImg = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImg(URL.createObjectURL(e.target.files[0]));
      setSelectedFile(e.target.files[0]);
    }
  };
  const submitData = async (e) => {
    e.preventDefault();
    if (name === "" || selectedFile === null) {
      Notify("there are some problems with add", "warn");
      return;
    }
    const formData = new FormData();
    formData.append("name", name);
    formData.append("image", selectedFile);
    setLoading(true);
    setPress(true);
    await dispatch(createBrand(formData));
    setLoading(false);
  };
  useEffect(() => {
    if (loading === false) {
      setName("");
      setImg(cloudComputing);

      setSelectedFile(null);
      setLoading(true);
      setPress(false);
      inputRef.current.value = "";
      if (res.status === 201) {
        Notify("Added succsusful", "success");
      } else {
        Notify("Added error ", "error");
      }
    }
  }, [loading, res.status]);
  return [
    name,
    img,
    inputRef,
    loading,
    press,
    changeImg,
    changeName,
    submitData,
  ];
}

export default useAddBrand;
