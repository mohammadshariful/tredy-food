import React from "react";
import { Row } from "react-bootstrap";
import "./ProductStoreInfo.css";
import RecentlyProduct from "./RecentlyProduct";
import TopRated from "./TopRated";
import TopSell from "./TopSell";
import TrendingProducts from "./TrendingProducts";
const ProductStoreInfo = () => {
  return (
    <section className="my-3">
      <Row xs={1} md={2} lg={4} className="justify-content-center">
        <TopSell />
        <TrendingProducts />
        <RecentlyProduct />
        <TopRated />
      </Row>
    </section>
  );
};

export default ProductStoreInfo;
