import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Notify from "../../hooks/useNotify";
import { createAdress, getAllAdresses } from "../../Redux/Slice/Adresses/AdressesThunk";

function useAddAdress() {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);
  const [alias, setAlias] = useState("");
  const [details, setDetails] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(true);
  const res = useSelector((state) => state.adress.adressCreated);

  const changeName = (e) => {
    e.persist();
    setAlias(e.target.value);
  };
  const changeDetails = (e) => {
    e.persist();
    setDetails(e.target.value);
  };
  const changeCity = (e) => {
    e.persist();
    setCity(e.target.value);
  };
  const changeZipCode = (e) => {
    e.persist();
    setPostalCode(e.target.value);
  };
  const changePhone = (e) => {
    e.persist();
    setPhone(e.target.value);
  };

  const submitData = async (e) => {
    e.preventDefault();
    setLoading(true);
    await dispatch(createAdress({
        alias,
        details,
        city,
        postalCode,
        phone
    }));
    handleOpen()
    setLoading(false);
  };
  useEffect(() => {
    if (loading === false) {
      if (res.status === 200) {
        Notify("Added succsusful", "success");
        dispatch(getAllAdresses(`/api/v1/adresses/`))
      } 
      else {
        Notify("Added error ", "error");
      }
    }
  }, [loading, res.status]);
  return [open,handleOpen,alias,changeName,details,changeDetails,city,changeCity,postalCode,changeZipCode,phone,changePhone,submitData]
}

export default useAddAdress;
