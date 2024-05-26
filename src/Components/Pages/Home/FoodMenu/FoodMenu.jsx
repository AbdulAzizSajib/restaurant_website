// import { useEffect, useState } from "react";
import SectionTitle from "../../../SectionTitle/SectionTitle";
// import PopularMenu from "../PopularMenu/PopularMenu";
import useMenu from "../../../Hooks/useMenu";
import FoodCategory from "../../Menu/FoodCategory/FoodCategory";

const FoodMenu = () => {
  const [menu] = useMenu();
  const popularItems = menu.filter((item) => item.category === "popular");
  // const [menu, setMenu] = useState([]);

  // useEffect(() => {
  //   fetch("menu.json")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       const popularItems = data.filter((item) => item.category === "popular");
  //       setMenu(popularItems);
  //     });
  // }, []);
  return (
    <div>
      <section className="mb-8 max-w-[1680px] mx-auto">
        <SectionTitle
          subHeading={"Check it Out"}
          heading={"FROM OUR MENU"}
        ></SectionTitle>
        {/* <div className="grid gap-4 md:grid-cols-2">
          {popularItems.map((item) => (
            <PopularMenu key={item._id} item={item}></PopularMenu>
          ))}
        </div> */}
        <FoodCategory items={popularItems} title={"dessert"}></FoodCategory>
      </section>
    </div>
  );
};

export default FoodMenu;
