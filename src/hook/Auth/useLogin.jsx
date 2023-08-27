import { useState } from "react";
import Notify from "../../hooks/useNotify";
import { useDispatch, useSelector } from "react-redux";
import { Login } from "../../Redux/Slice/Auth/AuthThunk";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
export const useLogin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(true);
  const [isPress, setIsPress] = useState(false);

  const changeEmail = (e) => {
    setEmail(e.target.value);
  };
  const changePassword = (e) => {
    setPassword(e.target.value);
  };

  const hundelSubmit = async () => {
    setIsPress(true);
    setLoading(true);
    await dispatch(
      Login({
        email,
        password,
      })
    );
    setLoading(false);
    setIsPress(false);
  };
  const res = useSelector((state) => state.auth.user);
  useEffect(() => {
    if (loading === false) {
      if (res) {
        if (res.data.token) {
          localStorage.setItem("token", res.data.token);
          Notify("Login succes", "success");
          setTimeout(() => {
            navigate("/");
          }, 2000);
        } else {
          localStorage.removeItem("token");
        }
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading]);

  return [
    email,
    password,
    changeEmail,
    changePassword,
    hundelSubmit,
    isPress,
    setIsPress,
  ];
};
