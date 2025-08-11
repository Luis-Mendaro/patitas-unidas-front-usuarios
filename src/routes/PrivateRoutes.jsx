import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";

export default function PrivateRoutes() {
  const userToken = useSelector((state) => state.user?.token);

  if (!userToken) {
    return <Navigate to={"/iniciar-sesion"} />;
  }
  return <Outlet />;
}
