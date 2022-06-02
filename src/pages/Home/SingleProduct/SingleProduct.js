import React from "react";
import img1 from "../../../assets/top-product/thumbnail-1.jpg";
import "./SingleProduct.css";
const SingleProduct = () => {
  return (
    <div className="custom-container product-container gap-3 mb-3">
      <div className="img-container">
        <img className="img-fluid" src={img1} alt="" />
      </div>
      <div className="product-info">
        <h6 className="title-text">
          Pepperidge Farm Farmhouse Hearty White Bread
        </h6>
        <p>
          <small>Ratings</small> <small className="text-secondary">(4.0)</small>
        </p>
        <p>
          <span className="primary-color fw-bold">$32.86</span>
          <small className="text-secondary">
            <del>$33.6</del>
          </small>
        </p>
      </div>
    </div>
  );
};

export default SingleProduct;
