import React from "react";
import "./Header.scss";
function Header(props) {
  return (
    <header>
      <nav>
        <div className="Logo">
          <img src="../../../assets/images/LOGO.svg" alt="Logo Kasa" />
        </div>
        <ul>
          <li>Accueil</li>
          <li>A propos</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
