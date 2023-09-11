import { useState } from "react";
import Notify from "../../hooks/useNotify";
import { useDispatch, useSelector } from "react-redux";
import { createGoogleUser, createUser } from "../../Redux/Slice/Auth/AuthThunk";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
export const useSignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const hundelSubmit = async (user) => {
    // validateForm()
    setLoading(true);
    await dispatch(createUser(user));
    setLoading(false);
  };
  const handleGoogleLoginSuccess = async(tokenResponse)=> {
    const accessToken = tokenResponse.access_token;
    setLoading(true);
    await dispatch(createGoogleUser(accessToken));
    setLoading(false);
  }
  const res = useSelector((state) => state.auth.user);
  useEffect(() => {
    if (loading === false) {
      if (res) {
        if (res.data.token) {
          localStorage.setItem("token", res.data.token);
          Notify("Sign up succes", "success");
          setTimeout(() => {
            navigate("/login");
          }, 2000);
        }
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading]);

  return [hundelSubmit,handleGoogleLoginSuccess];
};
