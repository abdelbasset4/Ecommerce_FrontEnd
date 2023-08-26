import { useState } from "react"
import Notify from "../../hooks/useNotify";
import { useDispatch, useSelector } from "react-redux";
import { createUser } from "../../Redux/Slice/Auth/AuthThunk";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
export const useRegister = () => {
    const dispatch  = useDispatch()
    const navigate = useNavigate()
 const [name, setName] = useState("") 
 const [email, setEmail] = useState("") 
 const [password, setPassword] = useState("") 
 const [confirmPassword, setComfirmPassword] = useState("") 
 const [phone, setPhone] = useState("") 
 const [loading, setLoading] = useState(true) 
 const changeName = (e) => {
    setName(e.target.value)
 }
 const changeEmail = (e) => {
    setEmail(e.target.value)
 }
 const changePassword = (e) => {
    setPassword(e.target.value)
 }
 const changeConfirmPassword = (e) => {
    setComfirmPassword(e.target.value)
 }
 const changePhone = (e) => {
    setPhone(e.target.value)
 }

 const hundelSubmit = async()=>{
    // validateForm()
    setLoading(true)
    await dispatch(createUser({
        name,
        email,
        password,
        confirmPassword,
        phone
    }))
    setLoading(false)
 }
 const res = useSelector((state) => state.auth.user)
 useEffect(() => {
   
    if(loading ===false){
        if(res){
            console.log(res);
            if(res.data.token){
                localStorage.setItem("token",res.data.token)
                Notify("Sign up succes","success")
                setTimeout(() => {
                    navigate('/login')
                }, 2000);
            }
        }
    }
 // eslint-disable-next-line react-hooks/exhaustive-deps
 }, [loading])
 
 return [name, email, password,confirmPassword, phone, changeName, changeEmail, changePassword,changeConfirmPassword,changePhone,hundelSubmit]
}
