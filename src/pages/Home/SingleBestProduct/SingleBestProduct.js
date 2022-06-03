import React from "react";
import { ProgressBar } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
// import required modules
import { Autoplay, Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "../../../assets/PopularProducts/product-1-2.jpg";
import img2 from "../../../assets/PopularProducts/product-2-2.jpg";
// Import Swiper React components
import "./SingleBestProduct.css";
const SingleBestProduct = () => {
  const features = [1, 2, 3, 4, 5, 6];

  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={10}
      loop={true}
      autoplay={{
        delay: 1500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      breakpoints={{
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
      }}
      modules={[Autoplay, Pagination]}
      className="mySwiper"
    >
      {features.map((feature, index) => (
        <SwiperSlide key={index}>
          <div className="popular-product-container">
            <div className="popular-img-container">
              <img className="img-fluid frontImg" src={img1} alt="" />
              <img className="img-fluid backImg" src={img2} alt="" />
            </div>
            <div className="product-info">
              <small className="text-secondary">pet Foods</small>
              <p>Blue Diamond Almonds Lightly Salted Vegetables</p>
              <p>
                <span>rating</span>
                <span className="text-secondary">(4.0)</span>
              </p>
              <p>
                <small className="text-secondary me-2">By</small>
                <small className="primary-color">Yoplait</small>
              </p>
              <p>
                <span className="primary-color fw-bold">$15.85</span>
                <small className="text-secondary ms-2">
                  <del>$16.8</del>
                </small>
              </p>
              <ProgressBar className="status-bar" variant="success" now={40} />
              <p>
                <small>Sold: 90 /120</small>
              </p>
              <button className="cartAddBtn d-block w-100">
                <FaShoppingCart /> <span>Add</span>
              </button>
            </div>
            <p className="news">new</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SingleBestProduct;
