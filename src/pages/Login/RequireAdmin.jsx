import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import { AuthContext } from "../../context/AuthContext";

const RequireAdmin = ({ children }) => {
  const { user, loading, error } = useContext(AuthContext);
  //   const [admin, adminLoading] = useAdmin(user);
  const location = useLocation();

  //   if (loading||adminLoading) {
  if (loading) {
    return <Loader />;
  }

  //   if (!user || !admin) {
  if (!user) {
    // signOut(auth);
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
  }
  return children;
};

export default RequireAdmin;
