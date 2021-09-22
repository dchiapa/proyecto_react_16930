import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import "./css/CartScreen.css";

export const CartScreen = () => {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);

  if (cart.length === 0) {
    setTimeout(() => {
      window.location.href = "/";
    }, 1000);
  }

  return (
    <main className="main main__cart">
      <h1 className="main__title">Resumen de compra</h1>
      {cart.length > 0 ? (
        <>
          <table>
            <thead>
              <tr>
                <th>Prod</th>
                <th>Precio</th>
                <th>Cant</th>
                <th>Total</th>
                <th>Eliminar</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((prod) => (
                <tr key={prod.id}>
                  <td>{prod.name}</td>
                  <td>${prod.price}</td>
                  <td>{prod.count}</td>
                  <td>${prod.count * prod.price}</td>
                  <td>
                    <button
                      className="btn cart__btn"
                      onClick={() => removeFromCart(prod.id)}
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
              <tr>
                <td colSpan="5" className="row__space"></td>
              </tr>
              <tr>
                <td colSpan="3">Total carrito</td>
                <td>
                  $
                  {cart.reduce(
                    (total, prod) => total + prod.price * prod.count,
                    0
                  )}
                </td>
                <td>
                  <button className="btn cart__btn" onClick={clearCart}>
                    Vaciar carrito
                  </button>
                </td>
              </tr>
              <tr>
                <td colSpan="5">
                  <Link className="btn cart__btn" to="/checkout">
                    Terminar compra
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </>
      ) : (
        <p>No hay productos en el carrito</p>
      )}
    </main>
  );
};
