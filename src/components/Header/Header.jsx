import React from "react";
import "./Header.scss";
import { NavLink } from "react-router-dom";
function Header(props) {
  return (
    <header>
      <nav>
        <div className="Logo">
          <NavLink to="/home">
            <img src="../../../assets/images/LOGO.svg" alt="Logo Kasa" />
          </NavLink>
        </div>
        <ul>
          <li>
            <NavLink to="/home">Accueil</NavLink>
          </li>
          <li>
            <NavLink to="/about">A propos</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
