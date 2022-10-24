import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/header.css";

const Navigation = () => {
  return (
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
  );
};

export default Navigation;
