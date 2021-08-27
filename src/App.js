import React from "react";
import { BrowserRouter, Switch, Redirect, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar/NavBar";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { Footer } from "./components/Footer/Footer";
import "./styles/styles.css";

function App() {
  return (
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
        <Route exact path="/nosotros">
          <main className="main">
            <h1 class="main__title">Nosotros - Próximamente</h1>
          </main>
        </Route>
        <Route excat path="/carrito">
          <main className="main">
            <h1 class="main__title">Carrito - Próximamente</h1>
          </main>
        </Route>
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
