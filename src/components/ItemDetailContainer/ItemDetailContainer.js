import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { UIContext } from "../../context/UIContext";
import { getData } from "../../helpers/getData";
import { ItemDetail } from "./ItemDetail";

export const ItemDetailContainer = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const { loading, setLoading } = useContext(UIContext);

  useEffect(() => {
    setLoading(true);
    getData()
      .then((data) => {
        setProduct(data.find((prod) => prod.id === parseInt(productId, 10)));
      })
      .finally(() => {
        setLoading(false);
      });
  }, [productId, setLoading]);

  return (
    <main className="main">
      {loading ? <div className="spinner"></div> : <ItemDetail {...product} />}
    </main>
  );
};
