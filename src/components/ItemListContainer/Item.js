import React from "react";
import { Link } from "react-router-dom";
import "./css/Item.css";

export const Item = ({ img, name, price, id }) => {
  return (
    <article className="item">
      <img className="item__img" src={img} alt={name} />
      <h3 className="item__title">{name}</h3>
      <p className="item__text">${price}</p>
      <Link to={`/detail/${id}`} className="item__btn">
        Ver detalle
      </Link>
    </article>
  );
};
