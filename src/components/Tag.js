import React from "react";
import "../styles/accomodation.css";

const Tag = ({ tags }) => {
  return (
    <div className="tags">
      {tags.map((element, index) => {
        return (
          <p key={index} className="tag">
            {element}
          </p>
        );
      })}
    </div>
  );
};

export default Tag;
