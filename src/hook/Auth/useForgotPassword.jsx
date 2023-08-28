import { useEffect, useState } from "react"
import { ForgotPassword } from "../../Redux/Slice/Auth/AuthThunk";
import Notify from "../../hooks/useNotify";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const useForgotPassword = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
  const [email,setEmail] = useState("")
  const [loading, setLoading] = useState(true);

  const changeEmail = (e) => {
    setEmail(e.target.value)
  }

  const hundelSubmit =async () =>{
    if(email ===""){
        Notify("Please enter your email", "error");
    }
    setLoading(true);
    await dispatch(ForgotPassword({
        email
    }))
    localStorage.setItem("email", email)
    setLoading(false);
  }
  const res = useSelector((state) => state.auth.user);

useEffect(() => {
  if(loading ===false){
    if(res){
        console.log(res);
        if(res.data.status ==="success"){
            Notify("Code Send Succsussfuly", "success");
            setTimeout(() => {
              navigate("/user/reset-code")
            }, 2500);
        }
        if(res.data.status ==="fail"){
            Notify("Error with Code Send", "error");
        }
    }
  }
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [loading])

  return [email, changeEmail,hundelSubmit]
}

export default useForgotPassword