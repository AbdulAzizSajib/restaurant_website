import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "./../../../Hooks/useAxiosSecure";
import { IoWalletSharp } from "react-icons/io5";
import { FaUsers } from "react-icons/fa";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { FaVanShuttle } from "react-icons/fa6";

const AdminHome = () => {
  const { user, loading } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: item } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/admin-Stats");

      return res.data;
    },
  });

  return (
    <div>
      <h2 className="text-3xl">
        <span>Hi, Welcome </span>
        <span className="font-bold text-pink-700">
          {user?.displayName ? user.displayName : "Back"}
        </span>
      </h2>
      <div className="shadow stats">
        <div className="stat">
          <div className="stat-figure text-secondary">
            <IoWalletSharp className="text-3xl "></IoWalletSharp>
          </div>
          <div className="stat-title">Revenue</div>
          <div className="stat-value"> $ {item?.totalRevenue || 0} </div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <FaUsers className="text-3xl"></FaUsers>
          </div>
          <div className="stat-title">Customer</div>
          <div className="stat-value"> {item?.users || 0} </div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <MdOutlineRestaurantMenu className="text-3xl"></MdOutlineRestaurantMenu>
          </div>
          <div className="stat-title">Total Menu Items</div>
          <div className="stat-value"> {item?.menuItems || 0} </div>
        </div>
        <div className="stat">
          <div className="stat-figure text-secondary">
            <FaVanShuttle className="text-3xl"></FaVanShuttle>
          </div>
          <div className="stat-title">Order</div>
          <div className="stat-value"> {item?.orders || 0} </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
