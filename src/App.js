import React, { Fragment } from "react";
import { NavBar } from "./components/NavBar/NavBar";
import { BrowserRouter, Switch, Redirect, Route } from "react-router-dom";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { Footer } from "./components/Footer/Footer";
import { CartProvider } from "./context/CartContext";
import { UIProvider } from "./context/UIContext";
import "./styles/styles.css";
import { CartScreen } from "./components/CartScreen/CartScreen";

function App() {
  return (
    <Fragment>
      <UIProvider>
        <CartProvider>
          <BrowserRouter>
            <NavBar />
            <Switch>
              <Route exact path="/">
                <ItemListContainer />
              </Route>
              <Route exact path="/category/:cat">
                <ItemListContainer />
              </Route>
              <Route exact path="/detail/:productId">
                <ItemDetailContainer />
              </Route>
              <Route excat path="/carrito">
                <CartScreen />
              </Route>
              <Route path="*">
                <Redirect to="/" />
              </Route>
            </Switch>
            <Footer />
          </BrowserRouter>
        </CartProvider>
      </UIProvider>
    </Fragment>
  );
}

export default App;
