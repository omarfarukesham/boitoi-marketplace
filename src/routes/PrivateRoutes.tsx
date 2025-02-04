import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutes = () => {
  const  user  = localStorage.getItem("email")
  return user ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoutes;