import React from "react";
import { Link } from "react-router-dom";
import { CartWidget } from "../CartWidget/CartWidget";
import "./css/NavBar.css";

export const NavBar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar__brand">
        TuTienda
      </Link>
      <CartWidget />
      <ul className="navbar__nav">
        <li className="navbar__item">
          <Link to="/" className="navbar__link">
            Inicio
          </Link>
        </li>
        <li className="navbar__item">
          <Link to="/category/pantalon" className="navbar__link">
            Pantalones
          </Link>
        </li>
        <li className="navbar__item">
          <Link to="/category/remera" className="navbar__link">
            Remeras
          </Link>
        </li>
        <li className="navbar__item">
          <Link to="/category/zapatillas" className="navbar__link">
            Zapatillas
          </Link>
        </li>
        <li className="navbar__item">
          <Link to="/nosotros" className="navbar__link">
            Nosotros
          </Link>
        </li>
        <li className="navbar__item">
          <Link to="/carrito" className="navbar__link">
            Carrito
          </Link>
        </li>
      </ul>
    </nav>
  );
};
