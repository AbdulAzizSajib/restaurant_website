// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
// import required modules
import { FreeMode, Pagination } from "swiper/modules";
// import image
import foodCatImg1 from "../../../../assets/home/slide1.jpg";
import foodCatImg2 from "../../../../assets/home/slide2.jpg";
import foodCatImg3 from "../../../../assets/home/slide3.jpg";
import foodCatImg4 from "../../../../assets/home/slide4.jpg";
import foodCatImg5 from "../../../../assets/home/slide5.jpg";
import SectionTitle from "../../../SectionTitle/SectionTitle";
const FoodCategory = () => {
  return (
    <div>
      <section className="max-w-[1680px] mx-auto">
        <SectionTitle
          subHeading={"From 11:00 AM to 10:00 PM"}
          heading={"Order Online"}
        ></SectionTitle>

        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide className="relative">
            <img className="w-full" src={foodCatImg1} alt="" />
            <div className="absolute flex items-end justify-center inset-5">
              <h2 className="text-4xl text-center text-white">Salad</h2>
            </div>
          </SwiperSlide>

          <SwiperSlide className="relative">
            <img className="w-full" src={foodCatImg2} alt="" />
            <div className="absolute flex items-end justify-center inset-5">
              <h2 className="text-4xl text-center text-white ">Pizza</h2>
            </div>
          </SwiperSlide>
          <SwiperSlide className="relative">
            <img className="w-full" src={foodCatImg3} alt="" />
            <div className="absolute flex items-end justify-center inset-5">
              <h2 className="text-4xl text-center text-white ">Suop</h2>
            </div>
          </SwiperSlide>
          <SwiperSlide className="relative">
            <img className="w-full" src={foodCatImg4} alt="" />
            <div className="absolute flex items-end justify-center inset-5">
              <h2 className="text-4xl text-center text-white ">Cake</h2>
            </div>
          </SwiperSlide>
          <SwiperSlide className="relative">
            <img className="w-full" src={foodCatImg5} alt="" />
            <div className="absolute flex items-end justify-center inset-5">
              <h2 className="text-4xl text-center text-white ">Salad</h2>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
    </div>
  );
};

export default FoodCategory;
