import React, { Fragment } from "react";
import "./css/ItemCount.css";

export const ItemCount = ({ stock, count, setCount }) => {
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
        <>
          <div className="counter">
            <button className="btn btn__counter" onClick={countMinus}>
              -
            </button>
            <input
              className="count__counter"
              type="text"
              disabled
              value={count}
            />
            <button className="btn  btn__counter" onClick={countPlus}>
              +
            </button>
          </div>
        </>
      }
    </Fragment>
  );
};
