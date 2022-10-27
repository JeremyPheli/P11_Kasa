import React from "react";
import "../styles/card.css";

const Card = ({ location }) => {
  return (
    <div className="card">
      <div className="filter" />
      <img src={location.cover} alt={"logement"} className="img-card" />
      <h2 className="title">{location.title}</h2>
    </div>
  );
};

export default Card;
