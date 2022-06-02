import React from "react";
import headPhone from "../../../assets/Icons/icon-headphone.svg";
import CustomLink from "../../Shared/CustomLink/CustomLink";
import "./CatagoryLink.css";
const CatagoryLink = () => {
  return (
    <div className="catagoryLink custom-container flex-column flex-lg-row">
      <div className="custom-container gap-3">
        <CustomLink to="/home">Browse All Catagory</CustomLink>
        <CustomLink to="/home">Home</CustomLink>
        <CustomLink to="/home">About</CustomLink>
        <CustomLink to="/home">Shop</CustomLink>
        <CustomLink to="/home">Blog</CustomLink>
        <CustomLink to="/home">Contact</CustomLink>
      </div>
      <div className="custom-container gap-2">
        <img src={headPhone} alt="" />
        <div>
          <h4 className="primary-color">1900-888</h4>
          <p>
            <small>24/7 support Center</small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CatagoryLink;
