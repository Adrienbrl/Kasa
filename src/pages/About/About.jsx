import React, { useState } from "react";
import "./About.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Banner from "../../components/Banner/Banner";
import Collapse from "../../components/Collapse/Collapse";
function About(props) {
  const infoCollapse = [
    {
      titre: "Fiabilite",
      description:
        "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.",
    },
    {
      titre: "Respect",
      description:
        "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
    },
    {
      titre: "Service",
      description:
        "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
    },
    {
      titre: "Sécurité",
      description:
        "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const handleClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      <Header />
      <Banner
        imageSrc="../../assets/images/banner-about.png"
        bannerAlt="banner about"
      />
      <div className="gallery-collapse">
        {infoCollapse.map((e, index) => (
          <Collapse
            key={index}
            titre={e.titre}
            description={e.description}
            style={{
              transition: "0.3s all",
              transform: `rotate(${openIndex === index ? "180" : "0"}deg)`,
            }}
            onClick={() => handleClick(index)}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default About;
