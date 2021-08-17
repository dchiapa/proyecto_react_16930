import React from "react";
import "./css/Item.css";

export const Item = ({ img, name, description, price }) => {
  return (
    <article className="item">
      <img className="item__img" src={img} alt={name} />
      <h3 className="item__title">{name}</h3>
      <p className="item__text">{description}</p>
      <p className="item__text">${price}</p>
    </article>
  );
};
