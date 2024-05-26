import { IoCartSharp } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";
import "./navBar.css";
import { useContext } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import useCart from "../../../Hooks/useCart";
const Navbar = () => {
  const { user, logoutUser } = useContext(AuthContext);

  const [cart] = useCart();

  const handleLogout = () => {
    logoutUser();
  };

  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/menu"> Menu </NavLink>
      </li>
      <li>
        <NavLink to="/order/salad"> Order </NavLink>
      </li>
      <li>
        <NavLink to="/dashboard"> Dashboard </NavLink>
      </li>
    </>
  );
  return (
    <div>
      <div className="fixed z-50 px-16 text-white bg-zinc-800 navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <a className="text-xl font-bold ">Daily Delicious</a>
        </div>
        <div className="hidden navbar-center lg:flex">
          <ul className="gap-2 px-1 menu menu-horizontal">{navLinks}</ul>
        </div>
        {/* logout section */}
        <div className="navbar-end">
          <Link to="/dashboard/cart">
            <button className="btn btn-ghost">
              <IoCartSharp className="text-xl"></IoCartSharp>
              <div className="badge badge-warning">+{cart.length} </div>
            </button>
          </Link>
          {user ? (
            <>
              <button onClick={handleLogout} className="btn btn-ghost ">
                Logout
              </button>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/login">Login</NavLink>
              </li>
            </>
          )}
          {/* {user?.email ? (
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src={user.photoURL} alt={user.photoURL} />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <button className="btn btn-sm btn-ghost">
                    {user?.displayName}
                  </button>
                </li>
                <li>
                  <button
                    onClick={handleLogout}
                    className="btn btn-sm btn-ghost"
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <Link to="/login">
              <button className="btn btn-sm btn-ghost">Login</button>
            </Link>
          )} */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
