import React from "react";
import { useParams } from "react-router-dom";
import Caroussel from "../components/Caroussel";
import DropDown from "../components/DropDown";
import Rating from "../components/Rating";
import Tag from "../components/Tag";
import { locationList } from "../datas/locationList";
import "../styles/accomodation.css";

const Accomodation = () => {
  const { id } = useParams();
  const accomodation = locationList.find((Object) => Object.id === id);

  return (
    <main className="accomodation">
      <div>
        <Caroussel />
      </div>
      <div className="accomodation-header">
        <div className="header-left">
          <h1 className="header-title">{accomodation.title}</h1>
          <h2 className="header-location">{accomodation.location}</h2>
          <div className="accomodation-tags">
            <Tag tags={accomodation.tags} />
          </div>
        </div>
        <div className="header-right">
          <div className="host">
            <div className="host-name">{accomodation.host.name}</div>
            <img
              src={accomodation.host.picture}
              alt={"host"}
              className="img-host"
            />
          </div>
          <div className="accomodation-rating">
            <Rating rating={accomodation.rating} />
          </div>
        </div>
      </div>
      <div className="accomodation-dropdown">
        <div className="accomodation-desc">
          <DropDown props={accomodation.description} title={"description"} />
        </div>
        <div className="accomodation-equip">
          <DropDown props={accomodation.equipments} title={"equipements"} />
        </div>
      </div>
    </main>
  );
};

export default Accomodation;
