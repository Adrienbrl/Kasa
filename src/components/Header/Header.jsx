import React from "react";
import "./Header.scss";
import { NavLink } from "react-router-dom";
function Header(props) {
  return (
    <header>
      <nav>
        <div className="logo">
          <NavLink to="/home">
            <img src="../../../assets/images/LOGO.svg" alt="Logo Kasa" />
          </NavLink>
        </div>
        <ul>
          <li>
            <NavLink
              to="/home"
              className={(nav) => (nav.isActive ? "nav-active" : "")}
            >
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={(nav) => (nav.isActive ? "nav-active" : "")}
            >
              À Propos
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
