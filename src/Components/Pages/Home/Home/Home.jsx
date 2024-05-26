import AboutUs from "../AboutUs/AboutUs";
import ChefRecom from "../ChefRecom/ChefRecom";
import FoodCategory from "../FoodCategory/FoodCategory";
import FoodDetails from "../FoodDetails/FoodDetails";
import FoodMenu from "../FoodMenu/FoodMenu";
import Testimonials from "../Testimonials/Testimonials";
import Banner from "./Banner/Banner";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>RICH FOOD | Home</title>
      </Helmet>
      <Banner></Banner>
      <FoodCategory></FoodCategory>
      <AboutUs></AboutUs>
      <FoodMenu></FoodMenu>
      <ChefRecom></ChefRecom>
      <FoodDetails></FoodDetails>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
<h2>Home</h2>;
