import React from "react";
import { Container } from "react-bootstrap";
import CatagoryLink from "../../External/CatagoryLink/CatagoryLink";
import Banner from "../Banner/Banner";
import "./Home.css";
const Home = () => {
  return (
    <Container>
      <CatagoryLink />
      <Banner />
    </Container>
  );
};

export default Home;
