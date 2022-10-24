import React from "react";
import logo from "../assets/logo/logo_footer.png";
import "../styles/footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <img src={logo} alt="logo kasa" className="kasa-logo-footer" />
      <div className="text-footer">© 2020 Kasa. All rights reserved </div>
    </div>
  );
};

export default Footer;
