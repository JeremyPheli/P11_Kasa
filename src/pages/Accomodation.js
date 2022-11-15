import React from "react";
import { useParams } from "react-router-dom";
import Caroussel from "../components/Caroussel";
import DropDown from "../components/DropDown";
import Rating from "../components/Rating";
import Tag from "../components/Tag";
import { locationList } from "../datas/locationList";

const Accomodation = () => {
  const { id } = useParams();
  const accomodation = locationList.find((Object) => Object.id === id);

  return (
    <main className="accomodation">
      <div>
        <Caroussel />
      </div>
      <div className="header-left">
        <h1>{accomodation.title}</h1>
        <h2>{accomodation.location}</h2>
        <div className="accomodation-tags">
          <Tag tags={accomodation.tags} />
        </div>
      </div>
      <div className="header-right">
        <div className="host">
          <div>{accomodation.host.name}</div>
          <div>{accomodation.host.picture}</div>
        </div>
        <div>
          <Rating />
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
