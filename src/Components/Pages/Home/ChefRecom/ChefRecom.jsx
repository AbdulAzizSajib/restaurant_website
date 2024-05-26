// import { useEffect, useState } from "react";
import SectionTitle from "../../../SectionTitle/SectionTitle";
import ChefMenu from "./ChefMenu/ChefMenu";
import useMenu from "../../../Hooks/useMenu";
// import FoodCard from "../../Order/FoodCard/FoodCard";

const ChefRecom = () => {
  // const [recommend, setRecommend] = useState([]);
  // useEffect(() => {
  //   fetch("menu.json")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       const recommendItems = data.filter(
  //         (item) => item.category === "dessert"
  //       );
  //       setRecommend(recommendItems);
  //     });
  // }, []);

  const [menu] = useMenu();
  const recommendItems = menu.filter((item) => item.category === "dessert");
  return (
    <div className="max-w-[1680px] mx-auto">
      <section>
        <SectionTitle
          subHeading={"Should Try"}
          heading={"Chef Recommends"}
        ></SectionTitle>

        <div className="grid grid-flow-row grid-cols-4 gap-y-12">
          {recommendItems.map((item) => (
            <ChefMenu key={item._id} item={item}></ChefMenu>
          ))}
          {/* <FoodCard item={recommendItems}></FoodCard> */}
        </div>
      </section>
    </div>
  );
};

export default ChefRecom;
