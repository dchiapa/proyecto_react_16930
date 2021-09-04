import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [count, setCount] = useState(0);

  const addToCart = (prod) => {
    if (prod.count > 0) {
      if (isInCart(prod.id)) {
        const newProd = cart.filter((item) => item.id === prod.id)[0];
        const oldCart = cart.filter((item) => item.id !== prod.id);
        setCount(prod.count);
        console.log("elemento original", newProd);
        console.log("carrito", oldCart);
        console.log("CANTIDAD", count);
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
  return (
    <CartContext.Provider
      value={{
        cart,
        isInCart,
        addToCart,
        removeFromCart,
        cartQuantity,
        clearCart,
        count,
        setCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
