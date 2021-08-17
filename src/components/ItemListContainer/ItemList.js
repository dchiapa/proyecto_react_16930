import React from "react";
import { Item } from "./Item";
import "./css/ItemList.css";

export const ItemList = ({ products = [] }) => {
  return (
    <section className="itemList">
      {products.map((prod) => (
        <Item key={prod.id} {...prod} />
      ))}
    </section>
  );
};
