import * as yup from "yup";

// const passwordRules = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
// min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.

export const SignUpSchema = yup.object().shape({
  name: yup
    .string()
    .min(3, "the username must be at least 3 characters")
    .max(15, "the username must be at least 15 characters")
    .required("username required"),
  email: yup.string().email("Please enter a valid email").required("Required"),
  password: yup
    .string()
    .min(5)
    .required("Please enter a password"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("confirm password Required"),
    phone:yup.number().positive().integer()
});
