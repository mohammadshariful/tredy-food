import React from "react";
import headPhone from "../../../assets/Icons/icon-headphone.svg";
import CustomLink from "../../Shared/CustomLink/CustomLink";
import "./CatagoryLink.css";
const CatagoryLink = () => {
  return (
    <div className="catagoryLink custom-container flex-column flex-lg-row">
      <div className="custom-container gap-3">
        <CustomLink to="/">Browse All Catagory</CustomLink>
        <CustomLink to="/">Home</CustomLink>
        <CustomLink to="/">About</CustomLink>
        <CustomLink to="/">Shop</CustomLink>
        <CustomLink to="/">Blog</CustomLink>
        <CustomLink to="/">Contact</CustomLink>
      </div>
      <div className="custom-container gap-2">
        <img src={headPhone} alt="" />
        <div>
          <h5 className="primary-color">1900-888</h5>
          <p>
            <small>24/7 support Center</small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CatagoryLink;
