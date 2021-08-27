import React, { useState } from "react";
import "./css/ItemCount.css";
export const ItemCount = ({ stock }) => {
  const [count, setCount] = useState(0);
  const countMinus = () => {
    count > 0 && setCount(count - 1);
  };
  const countPlus = () => {
    count + 1 < stock
      ? setCount(count + 1)
      : alert("No tenemos suficientes unidades en este momento.");
  };
  return (
    <div>
      <button className="count__Minus" onClick={countMinus}>
        -
      </button>
      <input className="count__counter" type="text" disabled value={count} />
      <button className="count__Plus" onClick={countPlus}>
        +
      </button>
    </div>
  );
};
