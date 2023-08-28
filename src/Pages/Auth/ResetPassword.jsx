import { ToastContainer } from "react-toastify";
import logo from "../../assets/logo.svg";
import { Button, Card, Input, Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import useResetPassword from "../../hook/Auth/useResetPassword";
const ResetPassword = () => {
    const [password,confirmPassword,changePassword,changeConfirmPassword, hundelSubmit] = useResetPassword()
    return (
      <div className="flex justify-center items-center min-h-screen mt-5">
        <Card color="transparent" shadow={false}>
          <Link to="/">
            <img
              src={logo}
              alt=""
              width={"100px"}
              className="text-center mx-auto"
            />
          </Link>
  
          <Typography color="gray" className="mt-3 font-normal text-center">
            Reset Password 
          </Typography>
          <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
            <div className="mb-4 flex flex-col gap-6">
            <Input type="password" size="lg" label="Password" value={password} onChange={changePassword} />
            <Input type="password" size="lg" label="confirm Password" value={confirmPassword} onChange={changeConfirmPassword} />
            </div>
            <div className="flex items-center justify-between"></div>
            <Button
              className="mt-6 bg-gray-900 py-4 hover:opacity-80"
              onClick={hundelSubmit}
              fullWidth>
              Verify Code
            </Button>
          </form>
        </Card>
        <ToastContainer />
      </div>
    );
}

export default ResetPassword