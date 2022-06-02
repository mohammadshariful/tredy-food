import React from "react";
import { Col, Row } from "react-bootstrap";
import { FaAngleRight } from "react-icons/fa";
import featured1 from "../../../assets/Featued2/featured1.png";
import featured2 from "../../../assets/Featued2/featured2.png";
import featured3 from "../../../assets/Featued2/featured3.png";
import "./Featured2.css";
const Featured2 = () => {
  const features = [
    {
      _id: 1,
      description: "Everything fress and clean out product",
      img: featured1,
    },
    {
      _id: 2,
      description: " Make your Breakfast Helthy and Easy",
      img: featured2,
    },
    {
      _id: 3,
      description: "The best Organic Products Online",
      img: featured3,
    },
  ];
  return (
    <section className="my-3">
      <Row xs={1} md={2} lg={3} className="justify-content-center">
        {features.map((feature) => (
          <Col className="featured-column" key={feature?._id}>
            <div
              style={{
                backgroundImage: `url(${feature?.img})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                borderRadius: "8px",
              }}
              className="h-100 feature-container"
            >
              <h5>{feature?.description}</h5>
              <button className="shop-btn primary-btn ">
                <span>Shop Now</span> <FaAngleRight className="angleRight" />
              </button>
            </div>
          </Col>
        ))}
      </Row>
    </section>
  );
};

export default Featured2;
