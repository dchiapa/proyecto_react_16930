import React, { Fragment } from "react";
import { NavBar } from "./components/NavBar/NavBar";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import "./styles/styles.css";

function App() {
  return (
    <Fragment>
      <NavBar />
      <ItemListContainer />
    </Fragment>
  );
}

export default App;
