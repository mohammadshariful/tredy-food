import React from "react";
import "./Info.css";
const Info = () => {
  return (
    <div className=" info-container">
      <div className="info">
        <p>About Us</p>
        <p>My Accouont</p>
        <p>Whislist</p>
        <p>Order Tracking</p>
      </div>
      <div className="info">
        <p>
          Need Help? Call Us <span className="primary-color">+1800800</span>
        </p>
        <p>English</p>
        <p>USD</p>
      </div>
    </div>
  );
};

export default Info;
