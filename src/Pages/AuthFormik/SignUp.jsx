import { Form, Formik } from "formik";
import { SignUpSchema } from "./Schema";
import TextField from "./TextField";
import { useRegister } from "../../hook/Auth/useRegister";

const initialValues = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
  phone: "",
};


const SignUp = () => {
    const [,,,,,,,,,,hundelSubmit] = useRegister()
    const onSubmit = async (values, actions)=>{
        await new Promise((resolve) => setTimeout(resolve, 1000));
        actions.resetForm();
        hundelSubmit()
    }
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={SignUpSchema}
      onSubmit={onSubmit}
      >
      {
        props=>(
            <Form className="w-50 mx-auto">
                <TextField label="username" name="name" type="text" placeholders="enter your username..." />
                <TextField label="email" name="email" type="email" placeholders="enter your email..." />
                <TextField label="password" name="password" type="password" placeholders="enter your password..." />
                <TextField label="confirm password" name="confirmPassword" type="password" placeholders="enter your confirm password..." />
                <TextField label="phone" name="phone" type="number" placeholders="enter your phone..." />
                <button className="bg-gray-900 text-white rounded-md px-2 py-4 mt-4 " type="submit">Register</button>
            
            </Form>
        )
      }
      </Formik>
  );
};

export default SignUp;
