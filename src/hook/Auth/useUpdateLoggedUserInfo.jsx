import { useDispatch, useSelector } from "react-redux";
import { baseURL } from "../../API/mainBaseURL";
import { updateUserInfo } from "../../Redux/Slice/Auth/AuthThunk";
import { useState } from "react";
import { useEffect } from "react";
import Notify from "../../hooks/useNotify";

const useUpdateLoggedUserInfo = (userDetails) => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);
  const [name, setName] = useState(userDetails.data?.name);
  const [email, setEmail] = useState(userDetails.data?.email);
  const [phone, setPhone] = useState(userDetails.data?.phone);
  const userImg = userDetails?.data?.profileImg.includes("user")?` ${baseURL}/users/${userDetails.data.profileImg}` :userDetails.data.profileImg
  console.log(userImg);
  const [file, setFile] = useState(
    userImg
  );
  const [loading, setLoading] = useState(true);
  const onChangeName = (e) => {
    setName(e.target.value);
  };
  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const onChangePhone = (e) => {
    setPhone(e.target.value);
  };

  //  submit form to update the user info
  const hundelSubmit = async (e) => {
    const formData = new FormData();
    formData.append("name", name);
    if(phone !==userDetails.data?.phone){
      formData.append("phone", phone);
    }
    if(email !==userDetails.data?.email){
      formData.append("email", email);
    }
    if (file[0].file === undefined) {
      formData.append("profileImg", userDetails.data.profileImg);
    } else {
      formData.append("profileImg", file[0].file);
    }
    setLoading(true);
    await dispatch(updateUserInfo(formData));
    handleOpen()
    setLoading(false);
  };
  const updateUser = useSelector((state) => state.auth.user);
  //  reset inputs and show notification
  useEffect(() => {
    if (loading === false) {
      console.log(updateUser);
      if (updateUser) {
        if (updateUser.status === 200) {
          Notify("Update user info succsusful", "success");
          setTimeout(() => {
            window.location.reload()
          }, 2000);
        } else {
          Notify("Update user info error ", "error");
        }
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading]);
  return [
    open,
    handleOpen,
    name,
    onChangeName,
    email,
    onChangeEmail,
    phone,
    onChangePhone,
    file,
    setFile,
    hundelSubmit,
  ];
};

export default useUpdateLoggedUserInfo;
