import {
  Card,
  Input,
  Button,
  Typography,
  Switch,
} from "@material-tailwind/react";
import logo from '../../assets/logo.svg'
import {BiLogoFacebookSquare} from "react-icons/bi"
import {AiFillGoogleSquare} from "react-icons/ai"
import {AiFillGithub} from "react-icons/ai"
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { useLogin } from "../../hook/Auth/useLogin";
export default function Login() {
  const google = ()=>{
    window.open("http://localhost:3000/api/v1/auth/google")
  }
  const github = ()=>{
    window.open("http://localhost:3000/api/v1/auth/github")
  }
  const [
    email,
    password,
    changeEmail,
    changePassword,
    hundelSubmit,
    // isPress,
    // setIsPress,
  ] = useLogin()
  return (
    <div className="flex justify-center items-center min-h-screen mt-5">

      <Card color="transparent" shadow={false}>
        <Link to="/">
        <img src={logo} alt="" width={"100px"} className="text-center mx-auto"/>
        </Link>

        <Typography color="gray" className="mt-1 font-normal text-center">
          Login with your email & password
        </Typography>
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-4 flex flex-col gap-6">
            <Input size="lg" label="Email" value={email} onChange={changeEmail} />
            <Input type="password" size="lg" label="Password" value={password} onChange={changePassword} />
          </div>
          <div className="flex items-center justify-between">
          <Switch
            label={
              <div>
                <Typography color="blue-gray" className="font-medium">Remember Me</Typography>
              </div>
            } 
            containerProps={{
              className: ""
            }}
          />
          <Link to='/user/forgotpassword' className="underline hover:no-underline">Forgot Password?</Link>
          </div>
          <Button className="mt-6 bg-gray-900 py-4 hover:opacity-80" onClick={hundelSubmit} fullWidth>
            Login
          </Button>
          <Typography color="gray" className=" font-normal text-center mt-3">
            OR.
          </Typography>
          <Button className="mt-6 bg-gray-900 py-4 flex justify-center items-center gap-2 capitalize font-semibold text-sm hover:opacity-80" fullWidth>
            <BiLogoFacebookSquare size={"1.5rem"}/> Login with Facebook
          </Button>
          
          <Button className="mt-6 bg-gray-900 py-4 flex justify-center items-center gap-2 capitalize font-semibold text-sm hover:opacity-80" fullWidth onClick={google}>
            <AiFillGoogleSquare size={"1.5rem"}/> Login with Google
          </Button>
          <Button className="mt-6 bg-gray-900 py-4 flex justify-center items-center gap-2 capitalize font-semibold text-sm hover:opacity-80" fullWidth onClick={github}>
            <AiFillGithub size={"1.5rem"}/> Login with Github
          </Button>
          <Typography color="gray" className="mt-4 text-center font-normal">
            Dont have any account? {" "}
            <a
              href="#"
              className=" text-gray-900 transition-colors hover:text-gray-700 font-bold"
            >
            Register
            </a>
          </Typography>
        </form>
      </Card>
      <ToastContainer />
    </div>
  );
}
