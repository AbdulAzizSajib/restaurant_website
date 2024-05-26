import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Components/Pages/Layout/Footer/Footer";
import Navbar from "../Components/Pages/Layout/Navbar/Navbar";
import { Toaster } from "react-hot-toast";

const Root = () => {
  const location = useLocation();
  console.log(location);
  // const isLoginHere = location.pathname.includes("login");

  const isLoginPage =
    location.pathname === "/login" || location.pathname === "/register";
  return (
    <div>
      <div>
        <Toaster />
      </div>
      {/* {isLoginHere || <Navbar></Navbar>} */}
      {isLoginPage || <Navbar></Navbar>}
      <Outlet></Outlet>
      {/* {isLoginHere || <Footer></Footer>} */}
      {isLoginPage || <Footer></Footer>}
    </div>
  );
};

export default Root;
