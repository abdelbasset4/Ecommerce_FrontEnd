/* eslint-disable react/prop-types */
import { Form, Formik } from "formik";
import { SignUpSchema } from "./Schema";
import TextField from "./TextField";
import { useSignUp } from "../../hook/Auth/useSignUp";
import { Button, Typography } from "@material-tailwind/react";
import { BiLogoFacebookSquare } from "react-icons/bi";
import { AiFillGoogleSquare } from "react-icons/ai";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import logo from "../../assets/logo.svg";
import { useGoogleLogin } from "@react-oauth/google";
const initialValues = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
  phone: "",
};

const SignUp = () => {
  const [hundelSubmit,handleGoogleLoginSuccess] = useSignUp();
  const onSubmit = async (values, actions) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    hundelSubmit(values);
    actions.resetForm();
  };
  
  
  const login = useGoogleLogin({ onSuccess: handleGoogleLoginSuccess });
  return (
    <div className="flex justify-center flex-col items-center min-h-screen mt-5">
      <Link to="/">
        <img
          src={logo}
          alt=""
          width={"100px"}
          className="text-center mx-auto mt-5"
        />
      </Link>
      <Formik
        initialValues={initialValues}
        validationSchema={SignUpSchema}
        onSubmit={onSubmit}>
        {(props) => (
          <Form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
            <TextField
              label="username"
              name="name"
              type="text"
              placeholders="enter your username..."
            />
            <TextField
              label="email"
              name="email"
              type="email"
              placeholders="enter your email..."
            />
            <TextField
              label="password"
              name="password"
              type="password"
              placeholders="enter your password..."
            />
            <TextField
              label="confirm password"
              name="confirmPassword"
              type="password"
              placeholders="enter your confirm password..."
            />
            <TextField
              label="phone"
              name="phone"
              type="number"
              placeholders="enter your phone..."
            />

            <button
              className="mt-6 text-white px-2  rounded-md w-full bg-gray-900 py-4 hover:opacity-80 disabled:opacity-50"
              disabled={props.isSubmitting}
              type="submit">
              Register
            </button>
            <Typography color="gray" className=" font-normal text-center mt-3">
              OR.
            </Typography>
            <Button
              className="mt-6 bg-gray-900 py-4 flex justify-center items-center gap-2 capitalize font-semibold text-sm hover:opacity-80"
              fullWidth>
              <BiLogoFacebookSquare size={"1.5rem"} /> Login with Facebook
            </Button>
            <Button
            className="mt-6 bg-gray-900 py-4 flex justify-center items-center gap-2 capitalize font-semibold text-sm hover:opacity-80"
            fullWidth
            onClick={() => login()}>
            <AiFillGoogleSquare size={"1.5rem"} /> Login with Google
          </Button>
            <Typography color="gray" className="mt-4 text-center font-normal">
              Already have an account?{" "}
              <a
                href="#"
                className=" text-gray-900 transition-colors hover:text-gray-700 font-bold">
                Sign In
              </a>
            </Typography>
          </Form>
        )}
      </Formik>
      <ToastContainer />
    </div>
  );
};

export default SignUp;
