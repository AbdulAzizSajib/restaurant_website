import { Link } from "react-router-dom";
import PopularMenu from "../../Home/PopularMenu/PopularMenu";

const FoodCategory = ({ items, title }) => {
  return (
    <div>
      <div className="grid max-w-[1680px] mx-auto gap-4 mb-8 md:grid-cols-2">
        {items.map((item) => (
          <PopularMenu key={item._id} item={item}></PopularMenu>
        ))}
      </div>
      <div className="flex justify-center w-full">
        <Link to={`/order/${title}`}>
          <button className="mb-10 text-yellow-600 border-0 border-b-4 border-yellow-600 btn btn-neutral ">
            Order Your Favourite Food
          </button>
        </Link>
      </div>
    </div>
  );
};

export default FoodCategory;
