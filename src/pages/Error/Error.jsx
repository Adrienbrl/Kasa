import React from "react";
import "./Error.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
function Error(props) {
  return (
    <div className="error">
      <Header />
      <h1>404</h1>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <span>Retourner à la page d'accueil</span>
      <Footer />
    </div>
  );
}

export default Error;
