import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import Loader from "../../components/Loader/Loader";
import { AuthContext } from "../../context/AuthContext";

const RequireAuth = ({ children }) => {
  const { user, loading, error } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return <Loader />;
  }
  if (error) {
    toast("something went wrong!");
  }
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
  }
  return children;
};

export default RequireAuth;
