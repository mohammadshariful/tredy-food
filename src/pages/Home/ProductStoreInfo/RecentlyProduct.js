import React from "react";
import { Col } from "react-bootstrap";
import SingleProduct from "../SingleProduct/SingleProduct";

const RecentlyProduct = () => {
  const product = [1, 2, 3, 4];
  return (
    <Col>
      <h4>Recently added</h4>
      <hr className="horizontalLine" />
      <div>
        {product.map((p, index) => (
          <SingleProduct key={index} />
        ))}
      </div>
    </Col>
  );
};

export default RecentlyProduct;
