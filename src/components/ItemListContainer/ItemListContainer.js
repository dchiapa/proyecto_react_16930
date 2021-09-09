import React, { Fragment, useContext, useEffect, useState } from "react";
import { UIContext } from "../../context/UIContext";
import { useParams } from "react-router-dom";
import { ItemList } from "./ItemList";
import { getFirestore } from "../../firebase/config";

export const ItemListContainer = () => {
  const { cat } = useParams();
  const [data, setData] = useState([]);
  const { loading, setLoading } = useContext(UIContext);

  useEffect(() => {
    const db = getFirestore();
    const products = db.collection("productos");
    setLoading(true);
    if (cat) {
      const productsFiltered = products.where("category", "==", cat);
      productsFiltered
        .get()
        .then((res) => {
          const data = res.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }));
          setData(data);
        })
        .finally(() => setLoading(false));
    } else {
      products
        .get()
        .then((res) => {
          const data = res.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }));
          setData(data);
        })
        .finally(() => setLoading(false));
    }
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
