import React from "react";
import "./Error.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";
function Error(props) {
  return (
    <div className="error">
      <Header />
      <h1>404</h1>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <Link to="/home">
        <span>Retourner à la page d'accueil</span>
      </Link>
      <Footer />
    </div>
  );
}

export default Error;
