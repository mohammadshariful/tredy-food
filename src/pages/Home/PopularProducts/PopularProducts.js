import React from "react";
import { Row } from "react-bootstrap";
import ProductCart from "../ProductCar/ProductCart";
import "./PopularProducts.css";
const PopularProducts = () => {
  const popularProducts = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <section className="my-3">
      <h3 className="mb-4">Popular Products</h3>
      <Row xs={1} md={2} lg={4} className="justify-content-center">
        {popularProducts.map((product, index) => (
          <ProductCart key={index} />
        ))}
      </Row>
    </section>
  );
};

export default PopularProducts;
