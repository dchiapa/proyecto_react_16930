import React from "react";
import { Link } from "react-router-dom";
import { ItemCount } from "../ItemCount/ItemCount";
import "./css/ItemDetail.css";

export const ItemDetail = ({
  name,
  category,
  price,
  description,
  img,
  stock,
}) => {
  return (
    <article className="item itemDetail">
      <h2 className="itemDetail__title">{name}</h2>
      <img className="itemDetail__img" src={img} alt={name} />
      <section className="itemDetail__data">
        <p className="itemDetail__text">Categoría: {category}</p>
        <p className="itemDetail__description">{description}</p>
        <p className="itemDetail__text">${price}</p>
        <ItemCount stock={stock} />
        <Link className="itemDetail__link" to={`/category/${category}`}>
          Volver
        </Link>
      </section>
    </article>
  );
};
