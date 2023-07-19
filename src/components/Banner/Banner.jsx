import React from "react";
import "./Banner.scss";
function Banner(props) {
  return (
    <div className="banner">
      <div className="overlay"></div>
      <img src={props.imageSrc} alt={props.bannerAlt} />
      <h1>{props.titre}</h1>
    </div>
  );
}

export default Banner;
