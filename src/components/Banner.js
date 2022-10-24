import React from "react";
import "../styles/banner.css";

const Banner = () => {
  return (
    <div className="banner">
      <img src="./images/banner_img.png" alt="paysage" className="banner-img" />
      <h3 className="banner-text">Chez vous, partout et ailleurs</h3>
    </div>
  );
};

export default Banner;
