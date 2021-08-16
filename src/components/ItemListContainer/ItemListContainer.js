import React, { Fragment, useEffect, useState } from "react";
import { pedirDatos } from "../../helpers/pedirDatos";
import { ItemList } from "./ItemList";
import "./css/ItemListContainer.css";

export const ItemListContainer = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    pedirDatos()
      .then((productsList) => {
        setData(productsList);
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);
  return (
    <main className="main">
      {loading ? (
        <h1 className="main__title">cargando...</h1>
      ) : (
        <Fragment>
          <h1 className="main__title">Productos</h1>
          <ItemList products={data} />
        </Fragment>
      )}
    </main>
  );
};
