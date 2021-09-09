import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { UIContext } from "../../context/UIContext";
import { getFirestore } from "../../firebase/config";
import { ItemDetail } from "./ItemDetail";

export const ItemDetailContainer = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const { loading, setLoading } = useContext(UIContext);

  useEffect(() => {
    const db = getFirestore();
    const productsCollection = db.collection("productos");
    const product = productsCollection.doc(productId);
    setLoading(true);
    product
      .get()
      .then((doc) => {
        setProduct({ ...doc.data(), id: doc.id });
      })
      .finally(() => setLoading(false));
  }, [productId, setLoading]);

  return (
    <main className="main">
      {loading ? <div className="spinner"></div> : <ItemDetail {...product} />}
    </main>
  );
};
