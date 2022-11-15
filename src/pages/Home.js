import React from "react";
import Banner from "../components/Banner";
// import Location from "../components/Location";
import Card from "../components/Card";
import "../styles/card.css";
import { locationList } from "../datas/locationList";

const Home = () => {
  return (
    <div>
      <Banner />
      <div className="body">
        <div className="location">
          {locationList.map((location) => (
            <Card key={location.id} location={location} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
