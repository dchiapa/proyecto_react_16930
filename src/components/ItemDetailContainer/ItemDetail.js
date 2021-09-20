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
  const { cart, isInCart, addToCart } = useContext(CartContext);
  const prodCount = () => {
    if (isInCart(id)) {
      console.log(cart);
      return cart.find((item) => item.id === id).count;
    } else return 0;
  };
  const [count, setCount] = useState(prodCount);
  const handleAdd = () => {
    addToCart({ id, name, price, count, img });
  };

  return (
    <article className="itemDetail">
      <h1 className="itemDetail__title">{name}</h1>
      <img className="itemDetail__img" src={img} alt={name} />
      <section className="itemDetail__data">
        <p className="itemDetail__text">Categoría: {category}</p>
        <p className="itemDetail__description">{description}</p>
        <section className="itemDetail__countPrice">
          <p className="itemDetail__text price">${price}</p>
          <ItemCount stock={stock} count={count} setCount={setCount} />
        </section>
        <section className="itemDetail__btns">
          <button className="btn" onClick={handleAdd}>
            {isInCart(id) ? "Actualizar" : "Agregar"}
          </button>
          <Link className="btn" to={`/category/${category}`}>
            Volver
          </Link>
        </section>
      </section>
    </article>
  );
};
