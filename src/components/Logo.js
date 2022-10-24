import React from "react";
import logo from "../assets/logo/logo_header.png";
import "../styles/header.css";

const Logo = () => {
  return (
    <div className="kasa-logo-header">
      <img src={logo} alt="logo-kasa" />
    </div>
  );
};

export default Logo;
