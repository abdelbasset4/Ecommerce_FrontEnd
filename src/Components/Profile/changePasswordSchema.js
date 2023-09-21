import * as yup from "yup";

// const passwordRules = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
// min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.

export const changePasswordSchema = yup.object().shape({
  currentpassword:yup.string().required("Please enter a current password"),
  password: yup
    .string()
    .min(5)
    .required("Please enter a new password"),
  confirmpassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("confirm password Required")
});
