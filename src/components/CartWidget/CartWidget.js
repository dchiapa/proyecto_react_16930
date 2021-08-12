import React from "react";
import "./css/cartWidget.css";
export const CartWidget = (props) => {
  return (
    <div className="cartWidget">
      <img
        className="cartWidget__logo"
        src={require("./img/cart__icon.png")}
        alt="carrito de compras"
      />
      <span className="cartWidget__text">Carrito</span>
    </div>
  );
};
