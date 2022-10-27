import React from "react";
import "../styles/banner.css";

const Banner = () => {
  return (
    <div className="banner">
      <img src="./images/banner_img.png" alt="paysage" className="banner-img" />
      <div className="banner-text">Chez vous, partout et ailleurs</div>
    </div>
  );
};

export default Banner;
