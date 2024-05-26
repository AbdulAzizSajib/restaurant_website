import { createBrowserRouter } from "react-router-dom";
import Error from "../Components/ErrorPage/Error";
import Root from "../Root/Root";
import Home from "../Components/Pages/Home/Home/Home";
import Menu from "../Components/Pages/Menu/Menu";
import Order from "../Components/Pages/Order/Order/Order";
import Login from "../Components/Pages/Login/Login";
import Register from "../Components/Pages/Register/Resgister";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import Admin from "../Components/Pages/Admin/Admin";
import DashBoard from "../Components/Pages/Dashboard/DashBoard";
import Cart from "../Components/Pages/Dashboard/Cart/Cart";
import AllUser from "../Components/Pages/Dashboard/AllUser/AllUser";
import AddItems from "../Components/Pages/Dashboard/AddItems/AddItems";
import AdminRoute from "./AdminRoute/AdminRoute";
import ManageItems from "../Components/Pages/Dashboard/ManageItems/ManageItems";
import UpdateItems from "../Components/Pages/Dashboard/UpdateItems/UpdateItems";
import Payment from "../Components/Pages/Dashboard/Payment/Payment";
import PaymentHistory from "../Components/Pages/Dashboard/PaymentHistory/PaymentHistory";
import UserHome from "../Components/Pages/Dashboard/UserHome/UserHome";
import AdminHome from "../Components/Pages/Dashboard/AdminHome/AdminHome";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/menu",
        element: <Menu></Menu>,
      },
      {
        path: "/order?/:category",
        element: <Order></Order>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/admin",
        element: (
          <PrivateRoute>
            <Admin></Admin>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashBoard></DashBoard>
      </PrivateRoute>
    ),
    errorElement: <Error></Error>,
    children: [
      //normal user routes
      {
        path: "/dashboard/userHome",
        element: <UserHome></UserHome>,
      },
      {
        path: "/dashboard/cart",
        element: <Cart></Cart>,
      },
      {
        path: "/dashboard/payment",
        element: <Payment></Payment>,
      },
      {
        path: "/dashboard/paymentHistory",
        element: <PaymentHistory></PaymentHistory>,
      },
      // admin routes

      {
        path: "/dashboard/adminHome",
        element: (
          <AdminRoute>
            <AdminHome></AdminHome>
          </AdminRoute>
        ),
      },

      {
        path: "/dashboard/allusers",
        element: (
          <AdminRoute>
            <AllUser></AllUser>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/addItems",
        element: (
          <AdminRoute>
            <AddItems></AddItems>
          </AdminRoute>
        ),
      },

      {
        path: "/dashboard/manageItems",
        element: (
          <AdminRoute>
            <ManageItems></ManageItems>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/UpdateItems/:id",
        element: (
          <AdminRoute>
            <UpdateItems></UpdateItems>
          </AdminRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://rich-food-server.vercel.app/menu/${params.id}`),
      },
    ],
  },
]);

export default router;
