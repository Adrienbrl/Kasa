import React from "react";
import "./Card.scss";

function Card(props) {
  return (
    <div className="card">
      <div className="overlay"></div>
      <img src={props.imageSrc} alt={props.titre} />
      <h2>{props.titre}</h2>
    </div>
  );
}

export default Card;
