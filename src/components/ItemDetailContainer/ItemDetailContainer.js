import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getData } from "../../helpers/getData";
import { ItemDetail } from "./ItemDetail";

export const ItemDetailContainer = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    getData()
      .then((data) => {
        setProduct(data.find((prod) => prod.id === parseInt(productId)));
      })
      .finally(() => {
        setLoading(false);
      });
  }, [productId]);
  return (
    <main className="main">
      {loading ? (
        <h2 className="main__title">Loading...</h2>
      ) : (
        <ItemDetail {...product} />
      )}
    </main>
  );
};
