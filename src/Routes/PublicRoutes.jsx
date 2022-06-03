import { Navigate } from "react-router-dom";

export const PublicRoutes = ({ isAuth, children }) => {
  return !isAuth ? children : <Navigate to="/home" />;
};
