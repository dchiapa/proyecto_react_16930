import React from "react";
import { Link } from "react-router-dom";
import { CartWidget } from "../CartWidget/CartWidget";
import "./css/NavBar.css";

import img from "./img/logo2.png";

export const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__head">
        <Link to="/" className="navbar__brand">
          <img src={img} className="navbar__img" alt="logo NuestraPesca" />
        </Link>
        <CartWidget />
      </div>
      <ul className="navbar__nav">
        <li className="navbar__item">
          <Link to="/" className="navbar__link">
            Inicio
          </Link>
        </li>
        <li className="navbar__item">
          <Link to="/category/reel" className="navbar__link">
            Reeles
          </Link>
        </li>
        <li className="navbar__item">
          <Link to="/category/caña" className="navbar__link">
            Cañas
          </Link>
        </li>
        <li className="navbar__item">
          <Link to="/category/combo" className="navbar__link">
            Combos
          </Link>
        </li>
      </ul>
    </nav>
  );
};
