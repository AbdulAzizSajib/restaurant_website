import { useEffect, useState } from "react";
import SectionTitle from "./../../../SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

//Import Rating styles
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("https://rich-food-server.vercel.app/reviews")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  }, []);
  return (
    <div className="max-w-[1680px] mx-auto">
      <SectionTitle
        subHeading={"What Our Clients Say"}
        heading={"Testimobials"}
      ></SectionTitle>

      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            {/* Rating section */}
            <div className="flex justify-center">
              <Rating
                style={{ maxWidth: 180 }}
                value={review.rating}
                readOnly
              />
            </div>
            <div className="flex flex-col items-center p-10 ">
              <p className="px-10 text-justify text-wrap">{review.details}</p>
              <h2 className="mt-4 text-4xl font-bold text-center text-yellow-600">
                {review.name}
              </h2>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
