import { Navigate } from "react-router-dom";

export const PrivateRoutes = ({ isAuth, children }) => {
  return isAuth ? children : <Navigate to="/" />;
};
