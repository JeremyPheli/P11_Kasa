import React from "react";
import logo from "../assets/logo/logo_header.png";
import { NavLink } from "react-router-dom";
import "../styles/header.css";

const Header = () => {
  return (
    <header>
      <img src={logo} alt="logo-kasa" className="logo-header" />
      <nav>
        <ul className="nav">
          <NavLink to="/">
            <li className="acceuil">Acceuil</li>
          </NavLink>
          <NavLink to="/about">
            <li className="about">A propos</li>
          </NavLink>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
