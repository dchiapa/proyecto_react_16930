import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import "./css/cartWidget.css";
import carrito from "./img/cart__icon.png";

export const CartWidget = () => {
  const { cartQuantity } = useContext(CartContext);

  return (
    <>
      {cartQuantity > 0 && (
        <Link to="/carrito" className="cartWidget">
          <img
            className="cartWidget__logo"
            src={carrito}
            alt="carrito de compras"
          />
          <span className="cartWidget__text">{cartQuantity}</span>
        </Link>
      )}
    </>
  );
};
