import React, { useState } from "react";
import "./Logements.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Collapse from "../../components/Collapse/Collapse";
import { logementsList } from "../../data/logementsList";
import { useParams } from "react-router-dom";
import Error from "../Error/Error";
import Rate from "../../components/Rate/Rate";

function Logements(props) {
  const { id } = useParams();
  const logement = logementsList.find((logement) => logement.id === id);
  const rates = [1, 2, 3, 4, 5];
  const [activeImg, setActiveImg] = useState(0);

  const handleClickBack = () => {
    if (activeImg === 0) {
      setActiveImg(logement.pictures.length - 1);
    } else {
      setActiveImg(activeImg - 1);
    }
  };

  const handleClickNext = () => {
    if (activeImg === logement.pictures.length - 1) {
      setActiveImg(0);
    } else {
      setActiveImg(activeImg + 1);
    }
  };

  const [collapseStates, setCollapseStates] = useState({
    description: false,
    equipments: false,
  });

  const openCollapse = (collapseId) => {
    setCollapseStates((prevState) => ({
      ...prevState,
      [collapseId]: !prevState[collapseId],
    }));
  };

  if (!logement) {
    return <Error />;
  }

  return (
    <div>
      <Header />
      <div className="logement-banner">
        {logement.pictures.map((e, index) => (
          <img
            className={activeImg === index ? "active" : null}
            key={index}
            src={e}
            alt={logement.title}
          />
        ))}
        <i
          onClick={() => handleClickBack()}
          id="left"
          className="fa-solid fa-chevron-left "
        ></i>
        <i
          onClick={() => handleClickNext()}
          id="right"
          className="fa-solid fa-chevron-right "
        ></i>
        <span>
          {activeImg + 1}/{logement.pictures.length}
        </span>
      </div>
      <div className="information">
        <div className="carac">
          <div className="logement-titre-loca">
            <h3>{logement.title}</h3>
            <p>{logement.location}</p>
          </div>
          <div className="logement-tag">
            {logement.tags.map((e, index) => (
              <div className="tag">
                {" "}
                <span key={index}>{e}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="auteur-note">
          <div className="auteur">
            <p>{logement.host.name}</p>
            <img src={logement.host.picture} alt={logement.host.name} />
          </div>
          <div className="note">
            {rates.map((e, index) => (
              <Rate
                key={index}
                color={parseInt(logement.rating) >= e ? "color" : null}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="logement-collapse">
        <Collapse
          id={collapseStates.description ? "arrow" : null}
          pClassName={collapseStates.description ? "hidden" : null}
          onClick={() => openCollapse("description")}
          titre="Description"
          description={logement.description}
        />
        <Collapse
          id={collapseStates.equipments ? "arrow" : null}
          pClassName={collapseStates.equipments ? "hidden" : null}
          onClick={() => openCollapse("equipments")}
          titre="Équipements"
          description={logement.equipments.map((e, index) => (
            <p key={index}>{e}</p>
          ))}
        />
      </div>
      <Footer />
    </div>
  );
}

export default Logements;
