import { useDispatch, useSelector } from "react-redux";
import { baseURL } from "../../API/mainBaseURL";
import { updateUserInfo } from "../../Redux/Slice/Auth/AuthThunk";
import { useState } from "react";
import { useEffect } from "react";
import Notify from "../../hooks/useNotify";

const useUpdateLoggedUserInfo = (user) => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);
  const [name, setName] = useState(user?.data?.name);
  const [email, setEmail] = useState(user?.data?.email);
  const [phone, setPhone] = useState(user?.data?.phone);
  const [file, setFile] = useState(
    user?.data?.profileImg || `${baseURL}/users/${user?.data?.profileImg}`
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
//   const onChangeImage = (e) => {
//     setFile(e.target.value);
//   };

  //  submit form to update the user info
  const hundelSubmit = async (e) => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("phone", phone);
    formData.append("email", email);
    if (file[0].file === undefined) {
      formData.append("profileImg", user.data.profileImg);
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

      if (updateUser) {
        if (updateUser.status === 200) {
          Notify("Update user info succsusful", "success");
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
