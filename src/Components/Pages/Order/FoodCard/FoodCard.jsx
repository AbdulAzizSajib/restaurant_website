import Swal from "sweetalert2";

import useAuth from "../../../Hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useCart from "../../../Hooks/useCart";

const FoodCard = ({ item }) => {
  const { name, image, price, recipe, _id } = item;
  const axiosSecure = useAxiosSecure();
  const location = useLocation();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [, refetch] = useCart();
  //
  const handleAddToCart = (food) => {
    if (user && user.email) {
      //todo: send cart item to the database
      console.log(user.email, food);
      const cartItem = {
        menuId: _id,
        email: user.email,
        name,
        image,
        price,
      };

      axiosSecure.post("/carts", cartItem).then((res) => {
        console.log(res.data);
        Swal.fire({
          icon: "success",
          title: `Successfully added ${name} to your Cart!`,
        });
        //refetch the cart to update the cart items count
        refetch();
      });
    } else {
      Swal.fire({
        title: "You are not Logged in!",
        text: "You have to logged to add to cart.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, LOGIN !",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };
  return (
    <div className="p-4 card glass ">
      <figure>
        <img
          className=" w-[600px] h-[300px] object-cover "
          src={image}
          alt={image}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p className="text-justify">{recipe}</p>

        <p className="text-lg font-bold text-center text-yellow-600">
          ${price}.00
        </p>

        <div className="justify-center card-actions">
          <button
            onClick={() => handleAddToCart(item)} //! 01
            className="text-yellow-600 border-0 border-b-4 border-yellow-600 btn btn-neutral"
          >
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
