import React from "react";
import "../styles/card.css";
import { useNavigate } from "react-router-dom";

const Card = ({ location }) => {
  const navigate = useNavigate();

  return (
    <div
      key={location.id}
      className="card"
      onClick={() => navigate(`logement/${location.id}`)}
    >
      <div className="filter" />
      <img src={location.cover} alt={"logement"} className="img-card" />
      <h2 className="title">{location.title}</h2>
    </div>
  );
};

export default Card;
