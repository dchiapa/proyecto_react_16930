import React from "react";
import "./css/ItemListContainer.css";
export const ItemListContainer = ({ greeting }) => {
  return (
    <main className="ItemList">
      <h1 className="ItemList__title">{greeting}</h1>
    </main>
  );
};
