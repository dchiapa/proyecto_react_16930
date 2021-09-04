import React, { Fragment } from "react";
import "./css/ItemCount.css";

export const ItemCount = ({ stock, count, setCount, addToCart, added }) => {
  const countMinus = () => {
    count > 0 && setCount(count - 1);
  };

  const countPlus = () => {
    count < stock
      ? setCount(count + 1)
      : alert("No tenemos suficientes unidades en este momento.");
  };

  return (
    <Fragment>
      {
        <div>
          <button className="count__Minus" onClick={countMinus}>
            -
          </button>
          <input
            className="count__counter"
            type="text"
            disabled
            value={count}
          />
          <button className="count__Plus" onClick={countPlus}>
            +
          </button>
          <button className="count__button" onClick={addToCart}>
            {added ? "Actualizar al carrito" : "Agregar al carrito"}
          </button>
        </div>
      }
    </Fragment>
  );
};
