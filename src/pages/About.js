import React from "react";
import BannerAbout from "../components/BannerAbout";
import DropDown from "../components/DropDown";
import "../styles/about.css";

const About = () => {
  const data = [
    "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos ainsi que les descriptions sont parfaitement conformes aux logements correspondant.",
    "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
    "Nos équipes se tiennent à votre entière disposition pour vous fournir une expérience parfaite et répondre à l'ensemble de vos questions.",
    "Kasa peut être tenu responsable en vertu des dispositions légales applicables en cas de faute intentionnelle et grave commise par nous, nos représentants légaux, administrateurs ou mandataires. ",
  ];

  return (
    <div className="main">
      <BannerAbout />
      <DropDown props={data[0]} title={"fiabilité"} />
      <DropDown props={data[1]} title={"respect"} />
      <DropDown props={data[2]} title={"service"} />
      <DropDown props={data[3]} title={"responsabilité"} />
    </div>
  );
};

export default About;
