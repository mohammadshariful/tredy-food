import React from "react";
import banner3 from "../../../assets/Banner/banner-9.png";
const Reached = () => {
  return (
    <section className="slider2">
      <div className="custom-container flex-column-reverse flex-lg-row">
        <div className="p-4">
          <h2>Stay home & get your daily needs from our shop</h2>
          <p>Start You'r Daily Shopping with Nest Mart</p>
          <div>
            <div className="input-group">
              <input
                type="text"
                className="serch-box"
                placeholder="Your Email Address"
              />
              <button type="button" className="search-btn">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div>
          <img className="img-fluid" src={banner3} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Reached;
