import React from "react";
import { Autoplay, Keyboard, Mousewheel, Navigation, Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import banner1 from "../../../assets/Banner/banner-1.jpg";
import banner2 from "../../../assets/Banner/banner-2.jpg";
import "./Banner.css";
const Banner = () => {
  return (
    <section className="my-3">
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        cssMode={true}
        loop={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Autoplay, Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide className="slider1">
          <div className="custom-container flex-column-reverse flex-lg-row">
            <div className="p-4">
              <h2>Fresh Vagetables Big Discount</h2>
              <p>Save up 50% off on your first order</p>
              <div>
                <div className="input-group">
                  <input
                    type="text"
                    className="serch-box"
                    placeholder="Your Email Address"
                  />
                  <button type="button" className="search-btn">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
            <div>
              <img className="img-fluid" src={banner1} alt="" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slider2">
          <div className="custom-container flex-column-reverse flex-lg-row">
            <div className="p-4">
              <h2>Don't miss amazing grocery deals</h2>
              <p>Sing up for the daily newsletter</p>
              <div>
                <div className="input-group">
                  <input
                    type="text"
                    className="serch-box"
                    placeholder="Your Email Address"
                  />
                  <button type="button" className="search-btn">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
            <div>
              <img className="img-fluid" src={banner2} alt="" />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Banner;
