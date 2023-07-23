import React from "react";
import "./Collapse.scss";

function Collapse(props) {
  return (
    <div className="collapse">
      <h3 onClick={props.onClick}>
        {props.titre} <i id={props.id} className="fa-solid fa-chevron-up"></i>
      </h3>
      <p className={props.pClassName}>{props.description}</p>
    </div>
  );
}

export default Collapse;
