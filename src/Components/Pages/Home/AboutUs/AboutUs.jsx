import aboutPic from "../../../../assets/home/chef-service.jpg";

const AboutUs = () => {
  return (
    <div className="mt-10 ">
      <div className="relative">
        <img className="w-full" src={aboutPic} alt={aboutPic} />
        <div className="absolute p-10 m-10 text-center text-black bg-white opacity-85 inset-5 ">
          <h2 className="text-5xl font-bold md:text-3xl">RICH FOOD</h2>
          <p className="font-bold">Where Comfort Meets Freshness</p>
          <br />
          <p className="text-4xl font-light text-justify ">
            Welcome to Rich Food, your haven for hearty, delicious meals made
            with love. We are a family-run restaurant passionate about using
            fresh, seasonal ingredients to create dishes that nourish the soul.
            Rich Food started as a dream to share [Founding Story, e.g., Grandma
            secret recipes, the comfort food we craved from home]. We believe in
            the power of food to bring people together and create lasting
            memories.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
