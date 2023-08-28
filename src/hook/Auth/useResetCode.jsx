import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Notify from "../../hooks/useNotify";
import { ResetCode } from "../../Redux/Slice/Auth/AuthThunk";
import { useEffect } from "react";

const useResetCode = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [resetCode, setResetCode] = useState("");
  const [loading, setLoading] = useState(true);

  const changeResetCode = (e) => {
    setResetCode(e.target.value);
  };

  const hundelSubmit = async () => {
    if (resetCode === "") {
      Notify("Please enter your reset code", "error");
    }
    setLoading(true);
    await dispatch(
      ResetCode({
        resetCode,
      })
    );
    setLoading(false);
  };
  const res = useSelector((state) => state.auth.user);

  useEffect(() => {
    if (loading === false) {
      if (res) {
        console.log(res);
        console.log(resetCode);
        if (res.status === 200) {
          Notify("Reset Code  Succsussfuly", "success");
          setTimeout(() => {
            navigate("/user/reset-password");
          }, 2500);
        }
        if (res.status === 500) {
          Notify("Error with Reset Code ", "error");
        }
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading]);

  return [resetCode, changeResetCode, hundelSubmit];
};

export default useResetCode;
