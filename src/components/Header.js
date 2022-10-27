import React from "react";
import logo from "../assets/logo/logo_header.png";
import { NavLink } from "react-router-dom";
import "../styles/header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="kasa-logo-header">
        <img src={logo} alt="logo-kasa" />
      </div>
      <div>
        <ul>
          <NavLink to="/">
            <li className="acceuil">Acceuil</li>
          </NavLink>
          <NavLink to="/about">
            <li className="about">A propos</li>
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Header;
