import { getFirestore } from "./config";
import firebase from "firebase/app";
import "firebase/firestore";

export const newOrder = (buyer, cart, cartTotal) => {
  return new Promise(async (resolve, reject) => {
    const db = getFirestore();
    const orders = db.collection("orders");
    const newOrder = {
      buyer: buyer,
      items: cart,
      total: cartTotal,
      date: firebase.firestore.Timestamp.fromDate(new Date()),
    };
    const productsToUpdate = db.collection("productos").where(
      firebase.firestore.FieldPath.documentId(),
      "in",
      cart.map((prod) => prod.id)
    );

    const query = await productsToUpdate.get();
    const batch = db.batch();
    const outOfStock = [];
    query.docs.forEach((doc) => {
      const productInCart = cart.find((prod) => prod.id === doc.id);
      if (doc.data().stock >= productInCart.count) {
        batch.update(doc.ref, {
          stock: doc.data().stock - productInCart.count,
        });
      } else {
        outOfStock.push({ id: doc.id, ...doc.data() });
      }
    });

    if (outOfStock.length === 0) {
      orders
        .add(newOrder)
        .then((res) => {
          batch.commit();
          resolve(res.id);
        })
        .catch((err) => reject(err));
    } else {
      reject({ error: "Productos sin stock", outOfStock });
    }
  });
};
