import { NavLink, Outlet } from "react-router-dom";

import {
  MdBookOnline,
  MdFoodBank,
  MdHomeWork,
  MdManageAccounts,
  MdReviews,
  MdShoppingCart,
} from "react-icons/md";
import { BsCart, BsFillBookmarkCheckFill } from "react-icons/bs";
import { CiMenuBurger } from "react-icons/ci";
import { MdPermContactCalendar } from "react-icons/md";
import { FaShoppingBag, FaUserShield } from "react-icons/fa";
import { IoCalendarClear, IoHomeSharp } from "react-icons/io5";
import useCart from "./../../Hooks/useCart";
import useAdmin from "../../Hooks/useAdmin";

const DashBoard = () => {
  const [cart] = useCart();
  //Todo: get isAdmin value from the database
  // const isAdmin = true;
  const [isAdmin] = useAdmin();

  return (
    <div>
      {/* <Navbar></Navbar> */}
      <div className="flex">
        <div className="w-64 bg-slate-200">
          <ul className="p-4 menu">
            {isAdmin ? (
              <>
                <li>
                  <NavLink to="/dashboard/adminHome">
                    <IoHomeSharp></IoHomeSharp>
                    Admin Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/addItems">
                    <MdFoodBank />
                    Add Items
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/manageItems">
                    <MdManageAccounts />
                    Manage Items
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/cart">
                    <BsCart></BsCart>
                    Cart
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/addReview">
                    <BsFillBookmarkCheckFill />
                    Manage Bookings
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/allUsers">
                    <FaUserShield></FaUserShield>
                    All USer
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/paymentHistory">
                    <IoHomeSharp></IoHomeSharp>
                    Payment History
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li>
                  <NavLink to="/dashboard/userHome">
                    <IoHomeSharp></IoHomeSharp>
                    User Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/paymentHistory">
                    <IoHomeSharp></IoHomeSharp>
                    Payment History
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/reservation">
                    <IoCalendarClear></IoCalendarClear>
                    Reservation
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/cart">
                    <MdShoppingCart className="text-lg"></MdShoppingCart>
                    My Cart ({cart.length})
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/addReview">
                    <MdReviews></MdReviews>
                    Add Review
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/myBooking">
                    <MdBookOnline></MdBookOnline>
                    My Booking
                  </NavLink>
                </li>
              </>
            )}
            <div className="divider"></div>
            {/* Shared  between user and admin dashboard */}
            <li>
              <NavLink to="/">
                <MdHomeWork></MdHomeWork>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/menu">
                <CiMenuBurger />
                Menu
              </NavLink>
            </li>
            <li>
              <NavLink to="/order/salad">
                <FaShoppingBag />
                Order
              </NavLink>
            </li>
            <li>
              <NavLink to="/">
                <MdPermContactCalendar />
                Contact
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="flex-1 p-4 bg-white ">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
