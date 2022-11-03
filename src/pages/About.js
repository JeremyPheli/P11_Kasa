import React from "react";
import BannerAbout from "../components/BannerAbout";
import DropDown from "../components/DropDown";
import "../styles/about.css";

const About = () => {
  return (
    <div className="main">
      <BannerAbout />
      <DropDown />
    </div>
  );
};

export default About;
