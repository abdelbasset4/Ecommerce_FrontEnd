import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Notify from "../../hooks/useNotify";
import { ResetPassword } from "../../Redux/Slice/Auth/AuthThunk";
import { useEffect } from "react";
const useResetPassword = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [loading, setLoading] = useState(true);
  
    const changePassword = (e) => {
      setPassword(e.target.value);
    };
    const changeConfirmPassword = (e) => {
      setConfirmPassword(e.target.value);
    };
  
    const hundelSubmit = async () => {
      if (password === "") {
        Notify("Please enter your new password", "error");
      }
      if (password !== confirmPassword) {
        Notify("password and confirm password is not the same", "error");
      }
      setLoading(true);
      await dispatch(
        ResetPassword({
          email:localStorage.getItem("email"),
          password:password,
          rePassword:confirmPassword
        })
      );
      setLoading(false);
    };
    const res = useSelector((state) => state.auth.user);
  
    useEffect(() => {
      if (loading === false) {
        if (res) {
          console.log(res);
          if (res.status === 200) {
            Notify("change password Succsussfuly", "success");
            setTimeout(() => {
              navigate("/login");
              localStorage.removeItem("email");
            }, 2500);
          }
          if (res.status === 500) {
            Notify("Error with reset password ", "error");
          }
        }
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [loading]);
  
    return [password,confirmPassword,changePassword,changeConfirmPassword, hundelSubmit];
}

export default useResetPassword