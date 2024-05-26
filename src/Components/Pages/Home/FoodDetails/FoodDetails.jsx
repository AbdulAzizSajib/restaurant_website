import SectionTitle from "../../../SectionTitle/SectionTitle";
import picture from "../../../../assets/home/featured.jpg";
import "./FoodDetails.css";
const FoodDetails = () => {
  return (
    <div className="bg-fixed bgImg">
      <div className="text-white">
        <SectionTitle
          subHeading={"Check it Out"}
          heading={"From Our Menu"}
        ></SectionTitle>
        <div className="flex items-center px-10 py-24 space-x-10 ">
          <div>
            <img src={picture} alt="" />
          </div>
          <div>
            <h2 className="text-3xl font-bold"> April 03, 2024</h2>
            <h2 className="text-2xl font-semibold">
              What Speciality We Offer?
            </h2>
            <p className="font-semibold text-justify ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              euismod lacinia arcu, eu facilisis leo lobortis eget. Donec
              ullamcorper, velit eu ullamcorper condimentum, leo nibh
              ullamcorper augue, eu ullamcorper nunc nibh eu augue.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodDetails;
