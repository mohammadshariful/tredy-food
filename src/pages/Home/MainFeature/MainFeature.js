import React from "react";
import { Col, Row } from "react-bootstrap";
import img1 from "../../../assets/MainFeature/icon-1.svg";
import img2 from "../../../assets/MainFeature/icon-2.svg";
import img3 from "../../../assets/MainFeature/icon-3.svg";
import img4 from "../../../assets/MainFeature/icon-4.svg";
import img5 from "../../../assets/MainFeature/icon-5.svg";
import "./MainFeature.css";
const MainFeature = () => {
  const mainFeature = [
    {
      _id: 1,
      img: img1,
      name: "Best prices & offers",
      description: "Orders $50 or more",
    },
    {
      _id: 2,
      img: img2,
      name: "Free delivery",
      description: "24/7 amazing services",
    },
    {
      _id: 3,
      img: img3,
      name: "Great daily deal",
      description: "When you sign up",
    },
    {
      _id: 4,
      img: img4,
      name: "Wide assortment",
      description: "Mega Discounts",
    },
    {
      _id: 5,
      img: img5,
      name: "Easy Returns",
      description: "Within 30 days",
    },
  ];
  return (
    <section className="my-3">
      <Row xs={1} md={2} lg={5} className="justify-content-center">
        {mainFeature.map((feature) => (
          <Col key={feature?._id}>
            <div className="custom-container main-feature h-100 ">
              <img
                className="img-fluid main-feature-img"
                src={feature?.img}
                alt=""
              />
              <div>
                <h6>{feature?.name}</h6>
                <p>
                  <small>{feature?.description}</small>
                </p>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </section>
  );
};

export default MainFeature;
