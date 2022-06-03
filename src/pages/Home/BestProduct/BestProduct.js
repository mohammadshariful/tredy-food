import React from "react";
import { Col, Row } from "react-bootstrap";
import { FaAngleRight } from "react-icons/fa";
import img from "../../../assets/Featued2/featured1.png";
import SingleBestProduct from "../SingleBestProduct/SingleBestProduct";
const BestProduct = () => {
  return (
    <section className="my-3">
      <h3 className="mb-4">Daily Best Sells</h3>
      <Row className="justify-content-center">
        <Col sm={12} lg={4} className="featured-column">
          <div
            style={{
              backgroundImage: `url(${img})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              borderRadius: "8px",
            }}
            className="h-100 feature-container"
          >
            <h5>Everything fress and clean out product</h5>
            <button className="shop-btn primary-btn ">
              <span>Shop Now</span> <FaAngleRight className="angleRight" />
            </button>
          </div>
        </Col>
        <Col sm={12} lg={8}>
          <SingleBestProduct />
        </Col>
      </Row>
    </section>
  );
};

export default BestProduct;
