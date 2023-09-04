
import { Outlet, Navigate } from "react-router-dom";

import jwt_decode from "jwt-decode";

// eslint-disable-next-line react/prop-types
const ProtectedRoute = ({ allowedRoles }) => {
  let currentDate = new Date();
  const decoded = jwt_decode(localStorage.getItem("token"));
  // eslint-disable-next-line react/prop-types
  const isAllowed = allowedRoles?.includes(decoded.role)
  // JWT exp is in seconds
  let isExpired = false
  if (decoded.exp * 1000 < currentDate.getTime()) {
    console.log("inValid token");
    // eslint-disable-next-line no-const-assign
    isExpired = false;
  } else {
    console.log("Valid token");
    // eslint-disable-next-line no-unused-vars
    isExpired = true;
  }
  return isAllowed && isExpired ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
