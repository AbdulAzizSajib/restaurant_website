import { useContext } from "react";
import { AuthContext } from "../../Components/AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import { lineSpinner } from "ldrs";
lineSpinner.register();

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
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

  if (user) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoute;
