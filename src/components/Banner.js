import React from "react";
import "../styles/banner.css";
import { useLocation } from "react-router-dom";

const Banner = () => {
  const { pathname } = useLocation();

  return (
    <div className="banner">
      <img
        src={
          pathname === "/about"
            ? "./images/banner_about_img.png"
            : "./images/banner_img.png"
        }
        alt="paysage"
        className="banner-img"
      />
      {pathname === "/" && (
        <div className="banner-text">Chez vous, partout et ailleurs</div>
      )}
    </div>
  );
};

export default Banner;
