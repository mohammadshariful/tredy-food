import React from "react";
import { Col } from "react-bootstrap";
import SingleProduct from "../SingleProduct/SingleProduct";

const TopRated = () => {
  const product = [1, 2, 3, 4];
  return (
    <Col>
      <h4>Top Rated</h4>
      <hr className="horizontalLine" />
      <div>
        {product.map((p, index) => (
          <SingleProduct key={index} />
        ))}
      </div>
    </Col>
  );
};

export default TopRated;
