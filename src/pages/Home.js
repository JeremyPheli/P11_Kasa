import React from "react";
import Banner from "../components/Banner";
import Card from "../components/Card";
import "../styles/card.css";
import "../styles/home.css";
import { locationList } from "../datas/locationList";

const Home = () => {
  return (
    <main className="home">
      <Banner />
      <div className="body">
        <div className="location">
          {locationList.map((location) => (
            <Card key={location.id} location={location} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Home;
