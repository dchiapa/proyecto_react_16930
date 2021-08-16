import { products } from "../data/products";

export const pedirDatos = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(products);
    }, 1000);
  });
};
