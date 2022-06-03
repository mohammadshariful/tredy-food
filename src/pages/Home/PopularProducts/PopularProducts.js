import React from "react";
import { Col, Row } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import img1 from "../../../assets/PopularProducts/product-1-2.jpg";
import img2 from "../../../assets/PopularProducts/product-2-2.jpg";
import "./PopularProducts.css";
const PopularProducts = () => {
  const popularProducts = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <section className="my-3">
      <h3 className="mb-4">Popular Products</h3>
      <Row xs={1} md={2} lg={4} className="justify-content-center">
        {popularProducts.map((product, index) => (
          <Col key={index} className="mb-3">
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
              <p className="news">new</p>
            </div>
          </Col>
        ))}
      </Row>
    </section>
  );
};

export default PopularProducts;
