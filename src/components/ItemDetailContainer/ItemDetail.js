import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { ItemCount } from "../ItemCount/ItemCount";
import "./css/ItemDetail.css";

export const ItemDetail = ({
  id,
  name,
  category,
  price,
  description,
  img,
  stock,
}) => {
  const { isInCart, addToCart } = useContext(CartContext);
  const [count, setCount] = useState(0);
  const handleAdd = () => {
    addToCart({ id, name, price, count });
  };

  return (
    <article className="item itemDetail">
      <h2 className="itemDetail__title">{name}</h2>
      <div className="itemDetail__img-container">
        <img className="itemDetail__img" src={img} alt={name} />
      </div>
      <section className="itemDetail__data">
        <p className="itemDetail__text">Categoría: {category}</p>
        <p className="itemDetail__description">{description}</p>
        <p className="itemDetail__text">${price}</p>
        <ItemCount
          stock={stock}
          count={count}
          setCount={setCount}
          addToCart={handleAdd}
          added={isInCart(id)}
        />
        <Link className="itemDetail__link" to={`/category/${category}`}>
          Volver
        </Link>
      </section>
    </article>
  );
};
