import React from "react";
import { Item } from "./Item";

export const ItemList = ({ products = [] }) => {
  return (
    <section>
      {products.map((prod) => (
        <Item key={prod.id} {...prod} />
      ))}
    </section>
  );
};
