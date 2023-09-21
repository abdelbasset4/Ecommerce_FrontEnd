import { Form, Formik } from "formik";
import { ToastContainer } from "react-toastify";
import { changePasswordSchema } from "./changePasswordSchema";
import TextField from "../../Pages/AuthFormik/TextField";
import useChangeCurrentUserPassword from "../../hook/Auth/useChangeCurrentUserPassword";
const initialValues = {
  currentpassword: "",
  password: "",
  confirmpassword: "",
};
export default function ChangePassword() {
  const [hundelSubmit] = useChangeCurrentUserPassword()
  const onSubmit = async (values, actions) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    hundelSubmit(values);
    actions.resetForm();
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={changePasswordSchema}
        onSubmit={onSubmit}
        >
        {(props) => (
          <Form className="mt-8 mb-2 w-80 mx-auto max-w-screen-lg sm:w-96">
            <TextField
              label="current password"
              name="currentpassword"
              type="password"
              placeholders="enter your current password..."
            />
            <TextField
              label="password"
              name="password"
              type="password"
              placeholders="enter your new password..."
            />
            <TextField
              label="confirm password"
              name="confirmpassword"
              type="password"
              placeholders="enter your confirm password..."
            />

            <button
              className="mt-6 text-white px-2  rounded-md w-full bg-gray-900 py-4 hover:opacity-80 disabled:opacity-50"
              disabled={props.isSubmitting}
              type="submit">
              Change Password
            </button>
          </Form>
        )}
      </Formik>
      <ToastContainer />
    </>
  );
}
