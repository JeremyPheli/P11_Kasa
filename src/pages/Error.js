import React from "react";
import "../styles/error.css";
import { NavLink } from "react-router-dom";

const Error = () => {
  return (
    <div>
      <div className="title-error">404</div>
      <div className="text-error">
        Oups ! La page que vous demandez n'existe pas.
      </div>
      <NavLink to="/">
        <p className="link-acceuil">Retourner sur la page d'acceuil</p>
      </NavLink>
    </div>
  );
};

export default Error;
