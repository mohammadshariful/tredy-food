import React from "react";
import { Col, Row } from "react-bootstrap";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import apple from "../../../assets/Icons/app-store.jpg";
import google from "../../../assets/Icons/google-play.jpg";
import time from "../../../assets/Icons/icon-clock.svg";
import contact from "../../../assets/Icons/icon-contact.svg";
import email from "../../../assets/Icons/icon-email-2.svg";
import location from "../../../assets/Icons/icon-location.svg";
import logo from "../../../assets/Icons/logo.svg";
import payment from "../../../assets/Icons/payment-method.png";
import phonesell from "../../../assets/Icons/phone-call.svg";
import "./Footer.css";
const Footer = () => {
  const date = new Date();
  const fullYear = date.getFullYear();
  return (
    <footer>
      <Row xs={1} md={2} lg={6} className="justify-content-center">
        <Col>
          <div className="column">
            <div>
              <img className="logo" src={logo} alt="" />
              <span className="primary-color">Tredy Foods</span>
            </div>
            <p>Awesome grocery store website template</p>

            <p>
              <img src={location} alt="" />
              <span className="ms-2">
                5171 W Campbell Ave undefined Kent, Utah 53127 United States
              </span>
            </p>
            <p>
              <img src={contact} alt="" />
              <span className="ms-2">(+91) - 540-025-124553</span>
            </p>
            <p>
              <img src={email} alt="" />
              <span className="ms-2">sale@Nest.com</span>
            </p>
            <p>
              <img src={time} alt="" />
              <span className="ms-2">10:00 - 18:00, Mon - Sat</span>
            </p>
          </div>
        </Col>
        <Col>
          <div className="column">
            <h6>Company</h6>
            <p>About Us</p>
            <p>Delivery Information</p>
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
            <p>Contact Us</p>
            <p>Support Center</p>
            <p>Careers</p>
          </div>
        </Col>
        <Col>
          <div className="column">
            <h6>Account</h6>
            <p>Sign In</p>
            <p>View Cart</p>
            <p>My Wishlist</p>
            <p>Track My Order</p>
            <p>Help Ticket</p>
            <p>Shipping Details</p>
            <p>Compare products</p>
          </div>
        </Col>
        <Col>
          <div className="column">
            <h6>Corporate</h6>
            <p>Become a Vendor</p>
            <p>Affiliate Program</p>
            <p>Farm Business</p>
            <p>Farm Careers</p>
            <p>Our Suppliers</p>
            <p>Accessibility</p>
            <p>Promotions</p>
          </div>
        </Col>
        <Col>
          <div className="column">
            <h6>Popular</h6>
            <p>Milk & Flavoured Milk</p>
            <p>Butter and Margarine</p>
            <p>Eggs Substitutes</p>
            <p>Marmalades</p>
            <p>Sour Cream and Dips</p>
            <p>Tea & Kombucha</p>
            <p>Cheese</p>
          </div>
        </Col>
        <Col>
          <div className="column">
            <h6>Install App</h6>
            <p>From App Store or Google Play</p>
            <div className="d-flex">
              <img className="storeicon" src={apple} alt="" />
              <img className="storeicon" src={google} alt="" />
            </div>
            <p>Secured Payment Gateways</p>
            <img className="img-fluid" src={payment} alt="" />
          </div>
        </Col>
      </Row>
      <hr />
      <div className="d-flex justify-content-between flex-column flex-lg-row ">
        <p> &copy; {fullYear},Tredy Foods. All rights reserved</p>
        <div className="d-flex gap-3">
          <div className="d-flex gap-2">
            <img className="phone_sell" src={phonesell} alt="" />
            <div>
              <h6 className="primary-color">1900 - 6666</h6>
              <p>
                <small>Working 8:00 - 22:00</small>
              </p>
            </div>
          </div>
          <div className="d-flex gap-2">
            <img className="phone_sell" src={phonesell} alt="" />
            <div>
              <h6 className="primary-color">1900 - 8888 </h6>
              <p>
                <small>24/7 Support Center</small>
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="d-flex gap-3 fs-5">
            <span className="me-2">Follow Us</span>
            <a href="#facebook">
              <FaFacebook />
            </a>
            <a href="#twiteer">
              <FaTwitter />
            </a>
            <a href="#Instragram">
              <FaInstagram />
            </a>
            <a href="#youtube">
              <FaYoutube />
            </a>
          </div>
          <p>
            <small>Up to 15% discount on your first subscribe</small>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
