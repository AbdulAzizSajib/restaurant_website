import { Helmet } from "react-helmet-async";
import HeadingCover from "./HeadingCover/HeadingCover";
import menuImg from "../../../assets/menu/banner3.jpg";
import menuImg2 from "../../../assets/menu/dessert-bg.jpeg";
import menuImg3 from "../../../assets/menu/pizza-bg.jpg";
import menuImg4 from "../../../assets/menu/salad-bg.jpg";
import menuImg5 from "../../../assets/menu/soup-bg.jpg";

import SectionTitle from "../../SectionTitle/SectionTitle";
import useMenu from "../../Hooks/useMenu";
import FoodCategory from "./FoodCategory/FoodCategory";

const Menu = () => {
  const [menu] = useMenu();

  const offered = menu.filter((item) => item.category === "offered");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const soup = menu.filter((item) => item.category === "soup");
  const dessert = menu.filter((item) => item.category === "dessert");

  return (
    <div>
      <Helmet>
        <title>RICH FOOD | Menu</title>
      </Helmet>
      {/*//! offer  heading cover //*/}
      <HeadingCover
        img={menuImg}
        title="Our Menu"
        subTitle="Would You Like To Try a Dish"
      ></HeadingCover>
      <SectionTitle
        subHeading="Don't Miss"
        heading="Today offer"
      ></SectionTitle>
      <FoodCategory items={offered} title={"offered"}></FoodCategory>
      {/* //! Salad*/}
      <HeadingCover
        img={menuImg4}
        title="salad"
        subTitle="Would You Like To Try a Dish"
      ></HeadingCover>
      <FoodCategory items={salad} title={"salad"}></FoodCategory>

      {/* //! Pizza */}

      <HeadingCover
        img={menuImg3}
        title="Pizza"
        subTitle="Would You Like To Try a Dish"
      ></HeadingCover>
      <FoodCategory items={pizza} title={"pizza"}></FoodCategory>

      {/* //! Soup */}
      <HeadingCover
        img={menuImg5}
        title="soup"
        subTitle="Would You Like To Try a Dish"
      ></HeadingCover>
      <FoodCategory items={soup} title={"soup"}></FoodCategory>

      {/* //! Dessert */}

      <HeadingCover
        img={menuImg2}
        title="Dessert"
        subTitle="Would You Like To Try a Dish"
      ></HeadingCover>
      <FoodCategory items={dessert} title={"dessert"}></FoodCategory>
    </div>
  );
};

export default Menu;
