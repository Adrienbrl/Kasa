import React from "react";
import "./Collapse.scss";

function Collapse(props) {
  return (
    <details className="collapse">
      <summary>
        {props.titre}
        <i
          style={props.style}
          onClick={props.onClick}
          className="fa-solid fa-chevron-up drop"
        ></i>
      </summary>
      <p>{props.description}</p>
    </details>
  );
}

export default Collapse;
