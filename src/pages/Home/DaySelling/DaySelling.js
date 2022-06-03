import React from "react";
import { Col, Row } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import img from "../../../assets/Img/banner-5.png";
import "./DaySelling.css";
const DaySelling = () => {
  const products = [1, 2, 3, 4];
  return (
    <section className="my-3">
      <h3 className="mb-3">Day selleing</h3>
      <Row xs={1} md={2} lg={4} className="justify-content-center">
        {products.map((product, index) => (
          <Col className="mb-3">
            <div className="products">
              <div className="">
                <img className="img-fluid" src={img} alt="" />
              </div>
              <div className="overlaping-container">
                <p>Simply Lemonade with Raspberry Juice</p>
                <p>
                  rating <sapn className="text-secondary">(3.0)</sapn>
                </p>
                <p>
                  <small className="text-secondary me-2">By</small>
                  <small className="primary-color">Yoplait</small>
                </p>
                <div className="custom-container">
                  <p>
                    <span className="primary-color fw-bold">$15.85</span>
                    <small className="text-secondary ms-2">
                      <del>$16.8</del>
                    </small>
                  </p>
                  <button className="addToCart">
                    <FaShoppingCart /> <span>Add</span>
                  </button>
                </div>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </section>
  );
};

export default DaySelling;
