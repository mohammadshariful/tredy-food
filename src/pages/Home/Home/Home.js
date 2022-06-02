import React from "react";
import { Container } from "react-bootstrap";
import CatagoryLink from "../../External/CatagoryLink/CatagoryLink";
import Banner from "../Banner/Banner";
import Featured1 from "../Featured1/Featured1";
import Featured2 from "../Featured2/Featured2";
import MainFeature from "../MainFeature/MainFeature";
import ProductStoreInfo from "../ProductStoreInfo/ProductStoreInfo";
import Reached from "../Reached/Reached";
import "./Home.css";
const Home = () => {
  return (
    <Container>
      <CatagoryLink />
      <Banner />
      <Featured1 />
      <Featured2 />
      <ProductStoreInfo />
      <Reached />
      <MainFeature />
    </Container>
  );
};

export default Home;
