import React from "react";
import { CartWidget } from "../CartWidget/CartWidget";
import "./css/NavBar.css";

export const NavBar = () => {
  return (
    <nav className="navbar">
      <h3 className="navbar__brand">TuTienda</h3>
      <CartWidget />
      <ul className="navbar__nav">
        <li className="navbar__item">link 1</li>
        <li className="navbar__item">link 2</li>
        <li className="navbar__item">link 3</li>
        <li className="navbar__item">link 4</li>
        <li className="navbar__item">link 5</li>
        <li className="navbar__item">link 6</li>
      </ul>
    </nav>
  );
};
