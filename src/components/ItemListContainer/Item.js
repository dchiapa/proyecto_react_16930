import React from "react";

export const Item = ({ img, name, description, price }) => {
  return (
    <article className="card col-4">
      <img src={img} alt={name} />
      <h3>{name}</h3>
      <p>{description}</p>
      <p>{price}</p>
    </article>
  );
};
