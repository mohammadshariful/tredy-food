import React from "react";
// import required modules
import { Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import car1 from "../../../assets/FeatureCatagories/cat-1.png";
import "./Featured1.css";
const Featured1 = () => {
  const features = [1, 2, 3, 4, 5, 6];
  const backgroundColor = ["#E7EAF3", "#F3E8E8", "#F0E8D5"];
  const randomBgColor = Math.floor(Math.random() * backgroundColor.length);

  return (
    <section className="my-4">
      <h3 className="pb-3">Featured Categories</h3>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {features.map((feature, index) => (
          <SwiperSlide key={index}>
            <div
              style={{
                backgroundColor: `${backgroundColor[randomBgColor]}`,
              }}
              className="catagory-container"
            >
              <img src={car1} alt="" />
              <p className="catagory-name">Stawberry</p>
              <p>
                <small>26 items</small>
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Featured1;
