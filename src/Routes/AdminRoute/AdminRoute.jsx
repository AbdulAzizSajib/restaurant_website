import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../Components/Hooks/useAuth";
import useAdmin from "../../Components/Hooks/useAdmin";

const AdminRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const [isAdmin, isAdminLoading] = useAdmin();
  const location = useLocation();

  if (loading || isAdminLoading) {
    return (
      <div className="flex items-center justify-center">
        <div>
          <l-line-spinner
            size="150"
            stroke="10"
            speed="1"
            color="black"
          ></l-line-spinner>
        </div>
      </div>
    );
  }

  // if user

  if (user && isAdmin) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default AdminRoute;
