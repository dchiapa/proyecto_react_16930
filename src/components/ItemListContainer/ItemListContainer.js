import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getData } from "../../helpers/getData";
import { ItemList } from "./ItemList";

export const ItemListContainer = () => {
  const { cat } = useParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    getData()
      .then((productsList) => {
        if (cat) {
          const filteredProducts = productsList.filter(
            (product) => product.category === cat
          );
          setData(filteredProducts);
        } else {
          setData(productsList);
        }
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [cat]);
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
