import React from "react";
import "./Card.scss";
import { Link } from "react-router-dom";

function Card(props) {
  return (
    <div className="card" id={props.id}>
      <Link to={`/logement/${props.id}`}>
        <div className="overlay"></div>
        <img src={props.imageSrc} alt={props.titre} />
        <h2>{props.titre}</h2>
      </Link>
    </div>
  );
}

export default Card;
