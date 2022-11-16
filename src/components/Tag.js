import React from "react";
import "../styles/accomodation.css";

const Tag = ({ tags }) => {
  return (
    <div className="tags">
      {tags.map((element, index) => {
        return <p key={index}>{element}</p>;
      })}
    </div>
  );
};

export default Tag;
