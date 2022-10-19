import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/navigation.css";

const Navigation = () => {
  return (
    <div className="navigation">
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
