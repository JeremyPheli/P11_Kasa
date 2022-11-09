import React, { useState } from "react";
import "../styles/about.css";

const DropDown = () => {
  const [isDown, setIsDown] = useState(false);

  const handleClick = () => {
    isDown ? setIsDown(false) : setIsDown(true);
  };

  return (
    <div className="dropdown">
      <div className="dropdown-head">
        <h3>Fiabilité</h3>
        <button type="button">
          <i class="fa-solid fa-chevron-up"></i>
        </button>
      </div>

      <div className="dropdown-content">A qda q ae a</div>
    </div>
  );
};

export default DropDown;
