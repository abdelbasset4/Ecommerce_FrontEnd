import jwt_decode from "jwt-decode";

const user = localStorage.getItem("token");
export const decodeToken = () => {
  let decodeUser = null;
  if (user) decodeUser = jwt_decode(user);
  return decodeUser;
};
