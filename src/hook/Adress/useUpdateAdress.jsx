import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Notify from "../../hooks/useNotify";
import { updateSpecificAdress } from "../../Redux/Slice/Adresses/AdressesThunk";

const useUpdateAdress = (adress) => {
  const dispatch = useDispatch();
  const [openUpdate, setOpen] = useState(false);
  const handleOpenUpdate = () => setOpen(!openUpdate);
  const [alias, setAlias] = useState(adress.alias);
  const [details, setDetails] = useState(adress.details);
  const [city, setCity] = useState(adress.city);
  const [postalCode, setPostalCode] = useState(adress.postalCode);
  const [phone, setPhone] = useState(adress.phone);
  const [loading, setLoading] = useState(true);
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


  //  submit form to update the brand
  const hundelSubmit = async (e) => {
    if (alias === "") {
      Notify("Coupon name is required", "warn");
      return;
    }
    setLoading(true);
    let args = [
      adress._id,
      {
        alias,
        details,
        city,
        postalCode,
        phone,
      },
    ];
    await dispatch(updateSpecificAdress(args));
    handleOpenUpdate();
    setLoading(false);
  };
  const updateAdress = useSelector((state) => state.adress.updateAdress);
  //  reset inputs and show notification
  useEffect(() => {
    if (loading === false) {
      if (updateAdress) {
        if (updateAdress.status === 200) {
          Notify("Update succsusful", "success");
          setTimeout(() => {
            window.location.reload()
          }, 3000);
        } else {
          Notify("Update error ", "error");
        }
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading]);

  return [
    openUpdate,
    handleOpenUpdate,
    alias,
    changeName,
    details,
    changeDetails,
    city,
    changeCity,
    postalCode,
    changeZipCode,
    phone,
    changePhone,
    hundelSubmit,
  ];
};

export default useUpdateAdress;
