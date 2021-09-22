import React, { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { newOrder } from "../../firebase/newOrder";
import "./css/Checkout.css";

export const Checkout = () => {
  const { cart, cartTotal, clearCart } = useContext(CartContext);

  const [buyer, setBuyer] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleInputChange = (e) => {
    setBuyer({ ...buyer, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    newOrder(buyer, cart, cartTotal)
      .then((res) => {
        alert(
          `Su orden ha sido generada.\nSu código de compra es: ${res}\nMuchas gracias.`
        );
        clearCart();
      })
      .catch((err) => console.log(err));
  };
  if (!cart.length) {
    setTimeout(() => {
      window.location.href = "/";
    }, 500);
  }

  return (
    <main className="main">
      <h1 className="main__title">Checkout</h1>
      {!cart.length ? (
        <h3>El carrito esta vacio.</h3>
      ) : (
        <>
          <form className="checkout" onSubmit={handleSubmit}>
            <label htmlFor="name">Nombre:</label>
            <input
              type="text"
              value={buyer.name}
              onChange={handleInputChange}
              name="name"
              required
            />
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              value={buyer.email}
              onChange={handleInputChange}
              name="email"
              required
            />
            <label htmlFor="phone">Telefono:</label>
            <input
              type="phone"
              value={buyer.phone}
              onChange={handleInputChange}
              name="phone"
              required
            />
            <button className="btn" type="submit">
              Enviar
            </button>
          </form>
        </>
      )}
    </main>
  );
};
