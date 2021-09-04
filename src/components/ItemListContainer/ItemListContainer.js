import React, { Fragment, useContext, useEffect, useState } from "react";
import { UIContext } from "../../context/UIContext";
import { useParams } from "react-router-dom";
import { getData } from "../../helpers/getData";
import { ItemList } from "./ItemList";

export const ItemListContainer = () => {
  const { cat } = useParams();
  const [data, setData] = useState([]);
  const { loading, setLoading } = useContext(UIContext);

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
  }, [cat, setLoading]);
  return (
    <main className="main">
      {loading ? (
        <div className="spinner"></div>
      ) : (
        <Fragment>
          <h1 className="main__title">Productos</h1>
          <ItemList products={data} />
        </Fragment>
      )}
    </main>
  );
};
