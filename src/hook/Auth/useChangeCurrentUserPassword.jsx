import Notify from "../../hooks/useNotify";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { updateUserPassword } from "../../Redux/Slice/Auth/AuthThunk";
import { useState } from "react";
const useChangeCurrentUserPassword = () => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const hundelSubmit = async (user) => {
    console.log("hello user");
    setLoading(true);
    await dispatch(updateUserPassword(user));
    setLoading(false);
  };

  const res = useSelector((state) => state.auth.user);
  useEffect(() => {
    if (loading === false) {
      console.log(res);
      if (res.status ===200) {
        if (res.data.token) {
          localStorage.setItem("token", res.data.token);
          Notify("reset password succes", "success");
          setTimeout(() => {
            location.reload();
          }, 2000);
        }
      } else if(res.status ===400) {
        Notify(res.data.errors[0].msg, "error");
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading]);

  return [hundelSubmit]
};

export default useChangeCurrentUserPassword;
