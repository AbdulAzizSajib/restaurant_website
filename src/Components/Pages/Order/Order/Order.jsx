import { Helmet } from "react-helmet-async";
import oderCover from "../../../../assets/shop/banner2.jpg";
import HeadingCover from "../../Menu/HeadingCover/HeadingCover";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useState } from "react";
import useMenu from "./../../../Hooks/useMenu";
// import FoodCard from "../FoodCard/FoodCard";
import OrderTabs from "../OrderTabs/OrderTabs";
import { useParams } from "react-router-dom";

const Order = () => {
  const categories = ["offered", "salad", "pizza", "soup", "dessert", "drinks"];
  const { category } = useParams();
  console.log(category);
  const initialIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialIndex);

  //!menu.......
  const [menu] = useMenu();
  const offered = menu.filter((item) => item.category === "offered");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salad = menu.filter((item) => item.category === "salad");
  const soup = menu.filter((item) => item.category === "soup");
  const dessert = menu.filter((item) => item.category === "dessert");
  const drinks = menu.filter((item) => item.category === "drinks");

  return (
    <div>
      <Helmet>
        <title>RICH FOOD | Order</title>
      </Helmet>
      <HeadingCover
        img={oderCover}
        title="Our Menu"
        subTitle="Would You Like To Try a Dish"
      ></HeadingCover>
      {/*//! TABS */}
      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList
          className={
            "text-2xl bg-black opacity-60 p-5 text-white font-bold flex justify-center"
          }
        >
          <Tab>Offer Item</Tab>
          <Tab>Salad</Tab>
          <Tab>Pizza</Tab>
          <Tab>Soup</Tab>
          <Tab>Dessert</Tab>
          <Tab>Drinks</Tab>
        </TabList>

        <TabPanel>
          {/* <div className="grid gap-4 mt-5 md:grid-cols-3">
            {offered.map((item) => (
              <FoodCard key={item._id} item={item}></FoodCard>
            ))}
          </div> */}
          <OrderTabs item={offered}></OrderTabs>
        </TabPanel>
        <TabPanel>
          <OrderTabs item={salad}></OrderTabs>
        </TabPanel>
        <TabPanel>
          <OrderTabs item={pizza}></OrderTabs>
        </TabPanel>
        <TabPanel>
          <OrderTabs item={soup}></OrderTabs>
        </TabPanel>
        <TabPanel>
          <OrderTabs item={dessert}></OrderTabs>
        </TabPanel>
        <TabPanel>
          <OrderTabs item={drinks}></OrderTabs>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;
