import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (prod) => {
    if (prod.count > 0) {
      if (isInCart(prod.id)) {
        const oldCart = cart.filter((item) => item.id !== prod.id);
        setCart([...oldCart, prod]);
      } else setCart([...cart, prod]);
    } else removeFromCart(prod.id);
  };

  const removeFromCart = (id) => {
    const newCart = cart.filter((prod) => prod.id !== id);
    setCart(newCart);
  };

  const clearCart = () => {
    setCart([]);
  };

  const cartQuantity = cart.reduce((count, prod) => count + prod.count, 0);

  const isInCart = (id) => {
    return cart.some((cartItem) => cartItem.id === id);
  };
  const cartTotal = cart.reduce(
    (total, prod) => total + prod.count * prod.price,
    0
  );
  return (
    <CartContext.Provider
      value={{
        cart,
        isInCart,
        addToCart,
        removeFromCart,
        cartQuantity,
        clearCart,
        cartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
