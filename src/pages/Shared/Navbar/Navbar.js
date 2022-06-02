import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { FiHeart, FiHome, FiLogIn, FiShoppingCart } from "react-icons/fi";
import logo from "../../../assets/Icons/logo.svg";
import CustomLink from "../CustomLink/CustomLink";
import "./Navbar.css";
const MainNavbar = () => {
  return (
    <Navbar collapseOnSelect expand="lg">
      <Container>
        <CustomLink to="/home">
          <img className="logo" src={logo} alt="" />
          <span className="primary-color logo-name">Tredy Foods</span>
        </CustomLink>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="d-flex justify-content-center align-items-center gap-4 ms-auto ">
            <CustomLink to="/home">
              <FiHome /> <span>Home</span>
            </CustomLink>
            <CustomLink to="/home"></CustomLink>
            <CustomLink to="/home">
              <FiHeart /> <span>Wishlist</span>
            </CustomLink>
            <CustomLink to="/home">
              <FiShoppingCart /> <span>Cart</span>
            </CustomLink>
            <CustomLink to="/home">
              <FiLogIn /> <span>SignIn</span>
            </CustomLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MainNavbar;
