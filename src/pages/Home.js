import React from "react";
import Banner from "../components/Banner";
import Location from "../components/Location";
import "../styles/home.css";

const Home = () => {
  return (
    <div>
      <Banner />
      <div className="body">
        <Location />
      </div>
    </div>
  );
};

export default Home;
