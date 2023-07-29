import React, { useState } from "react";
import "./Collapse.scss";

function Collapse(props) {
  const [openIndex, setOpenIndex] = useState(false);

  const handleClick = () => {
    setOpenIndex(!openIndex);
  };

  return (
    <div className="collapse">
      <h3 onClick={() => handleClick()}>
        {props.titre}
        <i
          id={openIndex ? "arrow" : null}
          className="fa-solid fa-chevron-up"
        ></i>
      </h3>
      <p className={openIndex ? null : "hidden"}>{props.description}</p>
    </div>
  );
}

export default Collapse;
