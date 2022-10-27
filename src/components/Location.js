import React from "react";
import { locationList } from "../datas/locationList";
import Card from "./Card";
import "../styles/card.css";

const Location = (id) => {
  return (
    <div className="location">
      {locationList.map((location) => (
        <Card key={id} location={location} />
      ))}
    </div>
  );
};

export default Location;
