import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

export const CartScreen = () => {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);

  if (cart.length === 0) {
    setTimeout(() => {
      window.location.href = "/";
    }, 1000);
  }

  return (
    <main className="main">
      <h1>Resumen de compra</h1>

      {cart.length > 0 ? (
        <>
          {cart.map((prod) => (
            <article key={prod.id}>
              <h3>{prod.name}</h3>
              <p>Cantidad: {prod.count}</p>
              <p>Precio: ${prod.price * prod.count}</p>
              <button onClick={() => removeFromCart(prod.id)}>Eliminar</button>
            </article>
          ))}
          <button className="" onClick={clearCart}>
            Vaciar carrito
          </button>
          <Link to="/checkout">Terminar compra</Link>
        </>
      ) : (
        <p>No hay productos en el carrito</p>
      )}
    </main>
  );
};
